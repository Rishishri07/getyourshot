import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersHomeComponent } from './centers-home.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CentersHomeRoutingModule} from './centers-home-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ProgressSpinnerModule} from "../../progress-spinner/progress-spinner.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {RemoveUnderscorePipe} from "../../shared/pipes/remove-underscore.pipe";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [CentersHomeComponent, RemoveUnderscorePipe],
  imports: [
    CommonModule,
    CentersHomeRoutingModule,
    MatFormFieldModule,
    FormsModule,
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
    MatProgressSpinnerModule,
    ProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
})
export class CentersHomeModule { }
