import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list',
  template: `
    <app-product-list-item
      [product]="product"
      (productSell)="handleProductSell($event)">

    </app-product-list-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'prod1',
    price: 1.99,
    description:'descr1'
  };

  ngOnInit() {
  }

  handleProductSell(name: string) {
    alert(name);
  }


}
