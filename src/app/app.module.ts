import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {CentersHomeModule} from './pages/centers-home/centers-home.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from "@angular/material/tabs";
import {DonorsHomeModule} from "./pages/donors-home/donors-home.module";
import {VaccinationCentersService} from "./shared/services/vaccination-centers.service";
import {HttpClientModule} from "@angular/common/http";
import {ProgressSpinnerModule} from "./progress-spinner/progress-spinner.module";
import {AppOverlayModule} from "./overlay/overlay.module";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatTabsModule,
    HttpClientModule,
    HomeModule,
    CentersHomeModule,
    DonorsHomeModule,
    ProgressSpinnerModule,
    AppOverlayModule,
  ],
  providers: [VaccinationCentersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
