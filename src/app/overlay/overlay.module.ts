import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayService} from './OverlayService';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  providers: [OverlayService],
})
export class AppOverlayModule { }