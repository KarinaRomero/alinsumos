import { ServicesInformationService } from './services/services-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  providers: [ServicesInformationService]
})
export class MainContentComponent implements OnInit {

  constructor(
    private services: ServicesInformationService
  ) {

  }

  ngOnInit() {
  }

}
