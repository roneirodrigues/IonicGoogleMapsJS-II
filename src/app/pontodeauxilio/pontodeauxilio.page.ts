import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Circle,
  Marker,
  Spherical, GoogleMapOptions,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { SalvarBDService } from '../service/salvar-bd.service';

const varKey = 'RSRCadPontoAuxilio';


@Component({
  selector: 'app-pontodeauxilio',
  templateUrl: './pontodeauxilio.page.html',
  styleUrls: ['./pontodeauxilio.page.scss'],
})
export class PontodeauxilioPage implements OnInit {

  pontodeAuxilio;
  pontodeAuxilioShow;
  searchItem;

  map: GoogleMap;

  varCity;
  urlGoogleMaps;
  urlGoogleMapsTrust;
  keyGooleMap;
  varZoom;

  constructor(
    private sanitizer: DomSanitizer,
    private salvarBDService: SalvarBDService

  ) { }

  ngOnInit() {
    this.salvarBDService.getItems(varKey).then(async res => {
      console.log('res', res);
      this.pontodeAuxilio = res;
      this.pontodeAuxilioShow = this.pontodeAuxilio;
      await this.loadMap();

    });

  }

  onClick(item) {
    this.salvarBDService.setCadastroPontodeAuxilio(item);
    this.salvarBDService.goToPage('/cadastropontodeauxilio', { queryParams: { par: 'Atualizar' } });
  }

  loadMap() {
    let point = [];
    this.pontodeAuxilioShow.forEach((data: any) => {

      let center: ILatLng = { "lat": data.latitude, "lng": data.longitude };

      point.push({
        position: center,
        title: data.nome,
        iconData: "assets/pin.png",
        icon: {
          url: 'assets/pin.png'
        },
        auxilio: data.auxilio
      });
    });

    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>(point);

    let bounds: ILatLng[] = POINTS.map((data: any, idx: number) => {
      return data.position;
    });

    this.map = GoogleMaps.create('map_canvas2', {
      camera: {
        target: bounds.length > 1 ? bounds : bounds[0],
        zoom: 15
      }
    });

    POINTS.forEach((data: any) => {
      data.disableAutoPan = true;

      let marker: Marker = this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);

      let circle: Circle = this.map.addCircleSync({
        'center': data.position,
        'radius': data.auxilio,
        'strokeColor': '#3880ff',
        'strokeWidth': 5,
        'fillColor': '#00880055'
      });
    });



  }

  onMarkerClick(params: any) {

    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }

  seachItems() {
    return this.pontodeAuxilioShow = this.pontodeAuxilio.filter((item) => {
      return (item.nome.toString() + item.endereco.toString() + item.nro.toString() + item.complemento.toString() + item.cidade.toString() + item.uf.toString()).toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1;
    });
  }

  async selectItem(items) {
    console.log('items', items);
    if (items.detail.value.length > 0) {

      this.pontodeAuxilioShow = this.pontodeAuxilio.filter(async e => {

        return items.detail.value.includes(e.nome);
      });
    } else {
      this.pontodeAuxilioShow = this.pontodeAuxilio;
    }

  }

}
