import { ServicesInformationService } from '../../services/services-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ServicesInformationService]
})
export class ServicesComponent implements OnInit {

  constructor(private services: ServicesInformationService) { }

  ngOnInit() {
  }

}
