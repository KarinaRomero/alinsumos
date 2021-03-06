import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'al-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('navBarState', [
      state('default', style({
        backgroundColor: 'transparent',
      })),
      state('scrolled', style({
        backgroundColor: '#884F20',
      })),
      transition('default => scrolled', animate('100ms ease-in')),
      transition('scrolled => default', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnDestroy {

  @ViewChild('nav') navigationBar;

  navStatus = 'default';
  navIsFixed = false;
  navIsOutOfIndex = false;

  routerEvent: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
    this.routerEvent = this.router.events.subscribe((routerEvents: any) => {
      if (routerEvents.url.indexOf('#') <= 0 && routerEvents.url !== '/') {
        this.navIsOutOfIndex = true;
        this.navStatus = 'scrolled';
        this.navIsFixed = true;
      } else {
        this.navIsOutOfIndex = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 400) {
      this.navStatus = 'scrolled';
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10 && !this.navIsOutOfIndex) {
      this.navStatus = 'default';
      this.navIsFixed = false;
    }
  }


  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }
}
