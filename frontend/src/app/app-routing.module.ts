import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'createtasks',
    loadChildren: () => import('./pages/createtasks/createtasks.module').then( m => m.CreatetasksPageModule)
  },
  {
    path: 'reviewtasks',
    loadChildren: () => import('./pages/reviewtasks/reviewtasks.module').then( m => m.ReviewtasksPageModule)
  },
  {
    path: 'detailstasks',
    loadChildren: () => import('./pages/detailstasks/detailstasks.module').then( m => m.DetailstasksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
