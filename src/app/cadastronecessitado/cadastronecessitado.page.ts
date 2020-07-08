import { Component, OnInit } from '@angular/core';
import { SalvarBDService } from '../service/salvar-bd.service';
import { ActivatedRoute } from '@angular/router';
import { cidades } from '../service/cidades';
import { uf } from '../service/uf';


const varKey = 'RSRCadNecessitado';
const varKeyPontodeAuxilio = 'RSRCadPontoAuxilio';

@Component({
  selector: 'app-cadastronecessitado',
  templateUrl: './cadastronecessitado.page.html',
  styleUrls: ['./cadastronecessitado.page.scss'],
})
export class CadastronecessitadoPage implements OnInit {

  cadastroNecessitado = {
    id: '',
    nome: '',
    cpf: '',
    rg: '',
    origem: '',
    uf: '',
    cidade: '',
    pontodeAuxilio: '',
    observacoes: ''
  };
  dataAtual;
  id;
  btnAtualizar;
  ufShow = uf;
  cidadesShow;
  pontodeAuxilioShow;
  pontodeAuxilio;

  constructor(
    private route: ActivatedRoute,

    private salvarBDService: SalvarBDService
  ) { }

  ngOnInit() {

    this.salvarBDService.getItems(varKeyPontodeAuxilio).then(res => {
      this.pontodeAuxilio = res;
    });

    this.route.queryParams.subscribe(parametros => {

      if (parametros.id) {
        this.cadastroNecessitado = {
          id: parametros.id,
          nome: parametros.nome,
          cpf: parametros.cpf,
          rg: parametros.rg,
          origem: parametros.origem,
          uf: parametros.uf,
          cidade: parametros.cidade,
          pontodeAuxilio: parametros.pontodeAuxilio,
          observacoes: parametros.observacoes
        };
        this.btnAtualizar = true;
      } else {
        this.btnAtualizar = false;
        this.dataAtual = this.salvarBDService.getDataAtual();
        this.id = this.dataAtual.getTime();
      }
    });


  }

  salvar() {
    this.cadastroNecessitado.id = this.id;
    this.salvarBDService.addItem(this.cadastroNecessitado, varKey).then(() =>
      this.salvarBDService.showToast('Cadastrado com sucesso.').then(() => this.salvarBDService.goToPage('home'))
    );
  }

  atualizar() {
    this.salvarBDService.updateItem(this.cadastroNecessitado, varKey).then(() =>
      this.salvarBDService.showToast('Atualizado com sucesso.').then(() => this.salvarBDService.goToPage('home'))
    );
  }

  selectCidade(itemUf) {
    this.cadastroNecessitado.cidade = null;
    this.cadastroNecessitado.pontodeAuxilio = null;
    return this.cidadesShow = cidades.filter((item) => {
      return (item.uf.toString()).toLowerCase().indexOf(itemUf.toLowerCase()) > -1;
    });
  }

  selectPontodeAuxilio() {
    this.pontodeAuxilioShow = this.pontodeAuxilio.filter(e => e.cidade == this.cadastroNecessitado.cidade);
  }

}
