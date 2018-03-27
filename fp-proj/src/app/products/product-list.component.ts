import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'fp-product-list',
  template: `
    <fp-product-list-item *ngFor="let product of products"
      (productSell)="handleProductSell($event)"             
      [(expandedId)]="expandedId"
      [product]="product"></fp-product-list-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  expandedId: number;
  products: Product[] = [{
    id:1,
    price: 9.99,
    description: 'prod decr1',
    title: 'Product 1'
  }, {
    id:2,
    price: 2.99,
    description: 'prod decr2',
    title: 'Product 2'
  },{
    id:3,
    price: 3.99,
    description: 'prod decr3',
    title: 'Product 3'
  },{
    id:4,
    price: 4.99,
    description: 'prod decr4',
    title: 'Product 4'
  }];

  constructor() { }

  ngOnInit() {
  }

  handleProductSell(name: string){
    alert(name);
  }

}
