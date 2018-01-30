import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../models/Product';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-edit',
  template: `
    <app-product-form (saveForm)="update($event)"></app-product-form>
    <p>
      Product: {{product$ | async | json}}
    </p>
  `,
  styles: []
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.product$ = this.activatedRoute.params
      .switchMap((params: Params) => this.productService.getProductById(params['id']));
  }

  update(product: Product) {
    console.log(product);
  }

}
