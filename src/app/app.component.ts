import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public pgMenu =
    [{
      title: 'Home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Associações',
      url: '/associacoes',
      icon: 'heart-outline'
    },

    {
      title: 'Ponto de auxílio',
      url: '/pontodeauxilio',
      icon: 'restaurant-outline'
    },
    {
      title: '',
      url: '',
      icon: ''
    },
    {
      title: 'Cad. Ponto de auxílio',
      url: '/cadastropontodeauxilio',
      icon: 'location-outline'
    },
    {
      title: 'Cad. Associação',
      url: '/cadastroassociacao',
      icon: 'business-outline'
    },
    {
      title: 'Cad. Necessitado',
      url: '/cadastronecessitado',
      icon: 'person-add-outline'
    },
      {
        title: '',
        url: '',
        icon: ''
      },
    {
      title: 'Sair',
      url: '/login',
      icon: 'power-outline'
    }
    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        // Api key for your server
        // (Make sure the api key should have Website restrictions for your website domain only)
        'API_KEY_FOR_BROWSER_RELEASE': '(ENTER YOUR KEY HERE)',

        // Api key for local development
        // (Make sure the api key should have Website restrictions for 'http://localhost' only)
        'API_KEY_FOR_BROWSER_DEBUG': '(ENTER YOUR KEY HERE)'
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
