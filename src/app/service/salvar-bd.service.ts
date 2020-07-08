import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SalvarBDService {

  cadastroAssociacaoSelected;
  cadastroPontodeAuxilioSelected;


  constructor(
    private storage: Storage,
    private toastController: ToastController,
    private router: Router

  ) { }

  setCadastroPontodeAuxilio(item) {
    this.cadastroPontodeAuxilioSelected = item;
  }

  getCadastroPontodeAuxilio() {
    return this.cadastroPontodeAuxilioSelected;
  }


  setCadastroAssociacao(item) {
    this.cadastroAssociacaoSelected = item;
  }

  getCadastroAssociacao() {
    return this.cadastroAssociacaoSelected;
  }

  goToPage(item, queryParams?) {

    if (queryParams) {
      this.router.navigate([item], queryParams);
    }
    else {
      this.router.navigate([item]);
    }
  }


  getDataAtual() {
    return new Date();
  }

  addItem(item, key): Promise<any> {
    console.log('item', item);

    return this.storage.get(key).then(items => {
      if (items) {
        items.push(item);
        return this.storage.set(key, items);
      } else {
        return this.storage.set(key, [item]);
      }
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'middle',
    });
    toast.present();
  }



  getItems(key) {
    return this.storage.get(key);
  }

  updateItem(item, key): Promise<any> {

    console.log('update item: ', item);

    return this.storage.get(key).then((items) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems = [];

      for (let i of items) {
        if (i.id == item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(key, newItems);
    });
  }

  deleteItem(id: number, key): Promise<any[]> {
    return this.storage.get(key).then((items: any[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: any[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(key, toKeep);
    });
  }
}
