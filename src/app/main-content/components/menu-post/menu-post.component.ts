import { GrainsLinks } from '../../services/classes/products-links';
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
      new Link('Maíz forrajero', GrainsLinks.MAIZ_FORRAJERO, true),
      new Link('Maíz tortillero', GrainsLinks.MAIZ_TORTILLERO),
      new Link('Trigo', GrainsLinks.TRIGO),
      new Link('Sorgo', GrainsLinks.SORGO),
      new Link('Semilla de Algodón', GrainsLinks.SEMILLA_ALGODON),
      new Link('Cártamo', GrainsLinks.CARTAMO)
    ];

    this.menuOptions = this.grainsMenu;
  }

  ngOnInit() {
  }

  markAsActive(link: string) {
    this.grainsMenu.forEach(menuLink => menuLink.active = false);
    this.grainsMenu.find(finded => finded.link === link).active = true;
  }

}
