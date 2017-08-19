import { ContentPost } from './classes/content-post';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsInformationService {

  productsInformation: Array<ContentPost>;

  private grains = new ContentPost('Granos', '', 'products/trigo-manos.jpg');
  private pastas = new ContentPost('Pastas', '', 'products/pasta.jpg');
  private flour = new ContentPost('Harinas', '', 'products/harina.jpg');
  private oils = new ContentPost('Grasas y aceites', '', 'products/grasas-aceites.jpg');

  constructor() {
    this.productsInformation = [this.grains, this.pastas, this.flour, this.oils];
  }

}
