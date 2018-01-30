import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-edit',
  template: `
    <p>
      Product: {{product | json}}
    </p>
  `,
  styles: []
})
export class ProductEditComponent implements OnInit {

  product: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params:Params) => {
        this.productService.getProductById(params['id'])
          .subscribe(
            p => this.product = p
          );
      })
  }

}
