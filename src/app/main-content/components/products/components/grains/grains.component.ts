import { GrainsService } from '../../../../services/data-services/grains.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.scss'],
  providers: [GrainsService]
})
export class GrainsComponent implements OnInit {

  constructor(private grainsService: GrainsService) { }

  ngOnInit() {
  }

}
