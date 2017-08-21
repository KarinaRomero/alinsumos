import { Link } from './classes/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-menu-post',
  templateUrl: './menu-post.component.html',
  styleUrls: ['./menu-post.component.scss']
})
export class MenuPostComponent implements OnInit {

  menuOptions: Array<Link>;

  private grainsMenu: Array<Link>;

  constructor() {
    this.grainsMenu = [
      new Link('Maíz forrajero', '', true),
      new Link('Maíz tortillero', ''),
      new Link('Trigo', ''),
      new Link('Sorgo', ''),
      new Link('Semilla de Algodón', ''),
      new Link('Cártamo', '')
    ];

    this.menuOptions = this.grainsMenu;
  }

  ngOnInit() {
  }

}
