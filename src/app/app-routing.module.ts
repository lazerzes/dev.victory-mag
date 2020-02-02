import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericErrorComponent } from './shared/pages/generic-error/generic-error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'error/:errorType',
    component: GenericErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error/PageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
