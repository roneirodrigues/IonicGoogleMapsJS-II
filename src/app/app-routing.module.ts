import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'associacoes',
    loadChildren: () => import('./associacoes/associacoes.module').then( m => m.AssociacoesPageModule)
  },
  {
    path: 'pontodeauxilio',
    loadChildren: () => import('./pontodeauxilio/pontodeauxilio.module').then( m => m.PontodeauxilioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastroassociacao',
    loadChildren: () => import('./cadastroassociacao/cadastroassociacao.module').then( m => m.CadastroassociacaoPageModule)
  },
  {
    path: 'cadastropontodeauxilio',
    loadChildren: () => import('./cadastropontodeauxilio/cadastropontodeauxilio.module').then( m => m.CadastropontodeauxilioPageModule)
  },
  {
    path: 'cadastronecessitado',
    loadChildren: () => import('./cadastronecessitado/cadastronecessitado.module').then( m => m.CadastronecessitadoPageModule)
  },
  {
    path: 'necessitado',
    loadChildren: () => import('./necessitado/necessitado.module').then( m => m.NecessitadoPageModule)
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
