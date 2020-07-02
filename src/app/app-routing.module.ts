import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recuperados',
    loadChildren: () => import('./recuperados/recuperados.module').then( m => m.RecuperadosPageModule)
  },
  {
    path: 'brasil',
    loadChildren: () => import('./brasil/brasil.module').then( m => m.BrasilPageModule)
  },
  {
    path: 'mundo',
    loadChildren: () => import('./mundo/mundo.module').then( m => m.MundoPageModule)
  },
  {
    path: 'quemsomos',
    loadChildren: () => import('./quemsomos/quemsomos.module').then( m => m.QuemsomosPageModule)
  },
  {
    path: 'meajuda',
    loadChildren: () => import('./meajuda/meajuda.module').then( m => m.MeajudaPageModule)
  },
  {
    path: 'contaminacao',
    loadChildren: () => import('./contaminacao/contaminacao.module').then( m => m.ContaminacaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
