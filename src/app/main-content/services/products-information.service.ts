import { GrainsLinks } from './classes/products-links';
import { GrainsService } from './data-services/grains.service';
import { DataServices } from './interfaces/data-services';
import { ContentPost } from './classes/content-post';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsInformationService implements DataServices {

  productsInformation: Array<ContentPost>;

  private grains = new ContentPost('Granos', '', 'products/trigo-manos.jpg', 'granos');
  private pastas = new ContentPost('Pastas', '', 'products/pasta.jpg');
  private flour = new ContentPost('Harinas', '', 'products/harina.jpg');
  private oils = new ContentPost('Grasas y aceites', '', 'products/grasas-aceites.jpg');

  constructor(private grainService: GrainsService) {
    this.productsInformation = [this.grains, this.pastas, this.flour, this.oils];
  }


  public getProduct(route: string): ContentPost {
    switch (route) {
      case GrainsLinks.MAIZ_FORRAJERO:
        return this.grainService.maizForrajero;
      case GrainsLinks.MAIZ_TORTILLERO:
        return this.grainService.maizTortillero;
      case GrainsLinks.TRIGO:
        return this.grainService.trigo;
      case GrainsLinks.SORGO:
        return this.grainService.sorgo;
      case GrainsLinks.SEMILLA_ALGODON:
        return this.grainService.algodon;
      case GrainsLinks.CARTAMO:
        return this.grainService.cartamo;
      default: return null;
    }
  }
}
