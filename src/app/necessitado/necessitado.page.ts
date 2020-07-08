import { Component, OnInit } from '@angular/core';
import { SalvarBDService } from '../service/salvar-bd.service';
const varKey = 'RSRCadNecessitado';

@Component({
  selector: 'app-necessitado',
  templateUrl: './necessitado.page.html',
  styleUrls: ['./necessitado.page.scss'],
})
export class NecessitadoPage implements OnInit {

  necessitado;
  necessitadoShow;
  searchItem;

  constructor(
    private salvarBDService: SalvarBDService,

  ) { }

  ngOnInit() {
    this.salvarBDService.getItems(varKey).then(res => {
      this.necessitado = res;
      this.necessitadoShow = this.necessitado;
    });
  }

  onClick(item) {
    this.salvarBDService.goToPage('/cadastronecessitado', { queryParams: item });
  }

  seachItems() {
    return this.necessitadoShow = this.necessitado.filter((item) => {
      return (item.nome.toString() + item.cpf.toString() + item.rg.toString() + item.origem.toString() + item.cidade.toString() + item.uf.toString() + item.pontodeAuxilio.toString()).toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1;
    });

  }

}
