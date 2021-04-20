import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy, OnInit {

  public paths: any = [];
  public loading = false;
  @ViewChild('drawer', {static: false}) public drawer: MatSidenav;
  public isExpanded: boolean;
  public screenWidth: number;
  /*@HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 500) {
      this.drawer.close();
    }
  }*/
  constructor(public router: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.screenWidth = window.innerWidth;
    this.matIconRegistry.addSvgIcon(
      'gts_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/gts_logo.svg'),
    );
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  public close(): void {
    this.drawer.close();
  }

  public ngOnInit(): void {
    this.router.navigate(['vaccination-centers']);
    if (this.screenWidth && this.screenWidth < 840) {
      this.router.events.subscribe(event => {
        // close sidenav on routing
        this.drawer.close();
      });
    }
  }

  public ngOnDestroy(): void {}
}
