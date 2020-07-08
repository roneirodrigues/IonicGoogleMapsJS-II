import { Component, OnInit } from '@angular/core';
import { SalvarBDService } from '../service/salvar-bd.service';

const varKey = 'RSRCadAssociacao';
@Component({
  selector: 'app-associacoes',
  templateUrl: './associacoes.page.html',
  styleUrls: ['./associacoes.page.scss'],
})
export class AssociacoesPage implements OnInit {

  associacoes;
  associacoesShow;
  searchItem;



  constructor(
    private salvarBDService: SalvarBDService,

  ) { }

  ngOnInit() {
    this.salvarBDService.getItems(varKey).then(res => {
      console.log('res', res);
      this.associacoes = res;
      this.associacoesShow = this.associacoes;
    });
  }

  onClick(item) {

    this.salvarBDService.setCadastroAssociacao(item);
    this.salvarBDService.goToPage('/cadastroassociacao', { queryParams: { par: 'Atualizar' } });

  }
  seachItems() {
    return this.associacoesShow = this.associacoes.filter((item) => {
      return (item.nome.toString() + item.cnpj.toString() + item.responsavel.toString() + item.cpfresponsavel.toString() + item.endereco.toString() + item.nro.toString() + item.cidade.toString() + item.uf.toString()).toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1;
    });

  }

}
