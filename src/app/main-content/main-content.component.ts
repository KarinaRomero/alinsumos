import { ProductsInformationService } from './services/products-information.service';
import { ServicesInformationService } from './services/services-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  providers: [ServicesInformationService, ProductsInformationService]
})
export class MainContentComponent implements OnInit {

  constructor(
    private services: ServicesInformationService,
    private products: ProductsInformationService
  ) {

  }

  ngOnInit() {
  }

}
