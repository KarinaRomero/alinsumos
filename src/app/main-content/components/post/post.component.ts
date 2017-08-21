import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsInformationService } from '../../services/products-information.service';
import { ContentPost } from '../../services/classes/content-post';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'al-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [ProductsInformationService]
})
export class PostComponent implements OnInit, OnDestroy {

  activeContent: ContentPost;
  paramsSubscription: Subscription;

  constructor(
    private products: ProductsInformationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
      (params: Params) => {
        this.activeContent = this.products.getProduct(params['product']);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
