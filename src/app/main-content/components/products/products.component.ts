import { ProductsInformationService } from '../../services/products-information.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsInformationService]
})
export class ProductsComponent implements OnInit {

  constructor(private products: ProductsInformationService) { }

  ngOnInit() {
  }

}
