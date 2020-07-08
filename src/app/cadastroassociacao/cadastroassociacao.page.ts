import { Component, OnInit } from '@angular/core';
import { SalvarBDService } from '../service/salvar-bd.service';
import { ActivatedRoute } from '@angular/router';
import { cidades } from '../service/cidades';
import { uf } from '../service/uf';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Polygon,
  BaseArrayClass,
  ILatLng, Environment,
  LatLng
} from '@ionic-native/google-maps';

const varKey = 'RSRCadAssociacao';

@Component({
  selector: 'app-cadastroassociacao',
  templateUrl: './cadastroassociacao.page.html',
  styleUrls: ['./cadastroassociacao.page.scss'],
})
export class CadastroassociacaoPage implements OnInit {


  id;
  dataAtual;
  cadastroAssociacao = {
    id: '',
    nome: '',
    cnpj: '',
    responsavel: '',
    cpfresponsavel: '',
    endereco: '',
    nro: '',
    uf: '',
    cidade: '',
    latitude: 0,
    longitude: 0,
    polygon: []
  };
  ufShow = uf;
  cidadesShow;
  btnAtualizar;
  arrayPoints;
  parametro;



  map: GoogleMap;


  constructor(
    private route: ActivatedRoute,
    private salvarBDService: SalvarBDService
  ) { }

  ngOnInit() {


    this.route.queryParams.subscribe(parametros => {

      if (parametros.par == 'Atualizar') {
        this.parametro = parametros.par;
        const ret = this.salvarBDService.getCadastroAssociacao();
        if (ret) {
          this.cadastroAssociacao = ret;

        }
        this.btnAtualizar = true;

      } else {
        this.parametro = 'Novo';
        this.btnAtualizar = false;
        this.dataAtual = this.salvarBDService.getDataAtual();
        this.id = this.dataAtual.getTime();
      }

    });


    if (this.cadastroAssociacao.polygon.length == 0) {
      for (let i = 0; i < 4; i++) {
        this.cadastroAssociacao.polygon.push({ lat: this.cadastroAssociacao.latitude, lng: this.cadastroAssociacao.longitude });
      }
    }
  }

  // latitude: "-23.656938"
  // longitude: "-46.695412"

  async ionViewWillEnter() {
    if (this.parametro == 'Atualizar') {
      await this.loadMap();
    }

  }

  loadMap() {


    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: this.cadastroAssociacao.polygon
      }
    });

    let polygon: Polygon = this.map.addPolygonSync({
      'points': this.cadastroAssociacao.polygon,
      'strokeColor': '#AA00FF',
      'fillColor': '#00FFAA',
      'strokeWidth': 10
    });

    let points: BaseArrayClass<ILatLng> = polygon.getPoints();

    points.forEach((latLng: ILatLng, idx: number) => {
      let marker: Marker = this.map.addMarkerSync({
        draggable: true,
        position: latLng
      });
      marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe((params) => {
        let position: LatLng = params[0];
        points.setAt(idx, position);

        this.arrayPoints = points.getArray();

      });
    });

  }

  async clearMap() {
    this.cadastroAssociacao.polygon = [];
    if (this.cadastroAssociacao.polygon.length == 0) {
      for (let i = 0; i < 4; i++) {
        this.cadastroAssociacao.polygon.push({ lat: this.cadastroAssociacao.latitude, lng: this.cadastroAssociacao.longitude });
      }
    }
  }

  salvar() {
    this.cadastroAssociacao.id = this.id;
    this.cadastroAssociacao.polygon = this.arrayPoints ? this.arrayPoints : [];
    this.salvarBDService.addItem(this.cadastroAssociacao, varKey).then(() =>
      this.salvarBDService.showToast('Cadastrado com sucesso.').then(() => this.salvarBDService.goToPage('home')));
  }

  atualizar() {
    this.cadastroAssociacao.polygon = this.arrayPoints ? this.arrayPoints : [];
    this.salvarBDService.updateItem(this.cadastroAssociacao, varKey).then(() =>
      this.salvarBDService.showToast('Atualizado com sucesso.').then(() => this.salvarBDService.goToPage('home')));
  }

  selectCidade(itemUf) {
    return this.cidadesShow = cidades.filter((item) => {
      return (item.uf.toString()).toLowerCase().indexOf(itemUf.toLowerCase()) > -1;
    });
  }

}
