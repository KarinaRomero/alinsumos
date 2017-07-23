import {Component, OnInit} from '@angular/core';

declare var Typed;

@Component({
  selector: 'al-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const typed = new Typed('#slogan-text',
      {
        stringsElement: '#typed-strings',
        loop: false,
        loopCount: Infinity,
        typeSpeed: 40,
        showCursor: false
      }
    );
  }

}
