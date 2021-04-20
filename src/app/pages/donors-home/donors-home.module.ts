import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorsHomeComponent } from './donors-home.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DonorsHomeRoutingModule} from './donors-home-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [DonorsHomeComponent],
  imports: [
    CommonModule,
    DonorsHomeRoutingModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatTabsModule,
    MatSidenavModule,
  ],
})
export class DonorsHomeModule { }
