import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-user-home',
  styleUrls: ['./donors-home.component.scss'],
  templateUrl: './donors-home.component.html',
})
export class DonorsHomeComponent implements OnInit, OnDestroy {

  public user: any;
  public destroySubject$: Subject<void> = new Subject();

  constructor() { }

  public ngOnInit(): void {
    // this.loginService.getUserData()
    //   .pipe(takeUntil(this.destroySubject$)).subscribe(user => {
    //   this.user = user;
    // });
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
