import { Component, OnInit } from '@angular/core';
import { SalvarBDService } from '../service/salvar-bd.service';
import { ActivatedRoute } from '@angular/router';
import { cidades } from '../service/cidades';
import { uf } from '../service/uf';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, ILatLng, Circle, Marker, Spherical, GoogleMapOptions, BaseArrayClass } from '@ionic-native/google-maps';


const varKey = 'RSRCadPontoAuxilio';


@Component({
  selector: 'app-cadastropontodeauxilio',
  templateUrl: './cadastropontodeauxilio.page.html',
  styleUrls: ['./cadastropontodeauxilio.page.scss'],
})
export class CadastropontodeauxilioPage implements OnInit {

  cadastroPontodeAuxilio = {
    id: '',
    nome: '',
    endereco: '',
    nro: '',
    complemento: '',
    uf: '',
    cidade: '',
    latitude: 0,
    longitude: 0,
    auxilio: 0
  };
  dataAtual;
  id;
  btnAtualizar: boolean;
  ufShow = uf;
  cidadesShow;
  map: GoogleMap;
  parametro;

  constructor(
    private route: ActivatedRoute,
    private salvarBDService: SalvarBDService,

  ) { }



  async ngOnInit() {
    this.route.queryParams.subscribe(async parametros => {

      if (parametros.par == 'Atualizar') {
        this.parametro = parametros.par;
        console.log('AAA',);
        const ret = this.salvarBDService.getCadastroPontodeAuxilio();
        console.log('retsss', ret);
        if (ret) {
          this.cadastroPontodeAuxilio = ret;
          await this.loadMap();
        }
        this.btnAtualizar = true;


      } else {
        this.parametro = 'Novo';
        this.btnAtualizar = false;
        this.dataAtual = this.salvarBDService.getDataAtual();
        this.id = this.dataAtual.getTime();
      }

    });
  }
  loadMap() {
    let center: ILatLng = { "lat": this.cadastroPontodeAuxilio.latitude, "lng": this.cadastroPontodeAuxilio.longitude };

    let radius = this.cadastroPontodeAuxilio.auxilio;  // radius (meter)

    // Calculate the positions
    let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
      return Spherical.computeOffset(center, radius, degree);
    });

    this.map = GoogleMaps.create('map_canvas1', {
      'camera': {
        'target': positions,
        'padding': 100
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    let marker: Marker = this.map.addMarkerSync({
      position: center,
      draggable: true,
      title: this.cadastroPontodeAuxilio.nome
    });
 
    let circle: Circle = this.map.addCircleSync({
      'center': center,
      'radius': radius,
      'strokeColor': '#AA00FF',
      'strokeWidth': 5,
      'fillColor': '#00880055'
    });


  }

  onMarkerClick(params: any) {

    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }

  salvar() {
    this.cadastroPontodeAuxilio.id = this.id;
    this.salvarBDService.addItem(this.cadastroPontodeAuxilio, varKey).then(() =>
      this.salvarBDService.showToast('Cadastrado com sucesso.').then(() => this.salvarBDService.goToPage('home'))
    );
  }

  atualizar() {
    this.salvarBDService.updateItem(this.cadastroPontodeAuxilio, varKey).then(() =>
      this.salvarBDService.showToast('Atualizado com sucesso.').then(() => this.salvarBDService.goToPage('home'))
    );
  }

  selectCidade(itemUf) {
    return this.cidadesShow = cidades.filter((item) => {
      return (item.uf.toString()).toLowerCase().indexOf(itemUf.toLowerCase()) > -1;
    });
  }

}
