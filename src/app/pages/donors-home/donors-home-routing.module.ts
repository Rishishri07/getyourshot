import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DonorsHomeComponent} from './donors-home.component';

const routes: Routes = [
  {
    path: '',
    component: DonorsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorsHomeRoutingModule { }
