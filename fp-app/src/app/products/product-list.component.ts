import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list',
  template: `
    <app-product-list-item *ngFor="let product of products"
      [product]="product"
      [(expandedProductId)]="expandedProductId"                     
      (productSell)="handleProductSell($event)">

    </app-product-list-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  expandedProductId: number;
  products: Product[] = [{
    id: 1,
    name: 'prod1',
    price: 1.99,
    description:'descr1'
  },{
    id: 2,
    name: 'prod2',
    price: 2.99,
    description:'descr2'
  },{
    id: 3,
    name: 'prod3',
    price: 3.99,
    description:'descr3'
  },{
    id: 4,
    name: 'prod4',
    price: 4.99,
    description:'descr4'
  }];

  ngOnInit() {
  }

  handleProductSell(name: string) {
    alert(name);
  }


}
