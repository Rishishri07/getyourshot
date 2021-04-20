import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CentersHomeComponent} from './centers-home.component';

const routes: Routes = [
  {
    path: '',
    component: CentersHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentersHomeRoutingModule { }
