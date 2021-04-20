import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'vaccination-centers',
        loadChildren: () =>
          import('./pages/centers-home/centers-home.module').then(
            (m) => m.CentersHomeModule,
          ),
      },
      {
        path: 'donors/home',
        loadChildren: () =>
          import('./pages/donors-home/donors-home.module').then(
            (m) => m.DonorsHomeModule,
          ),
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
