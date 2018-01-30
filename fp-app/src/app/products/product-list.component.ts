import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <input type="text" #searchInput/> 
      <button type="button" class="btn btn-warning" 
              (click)="search(searchInput.value)">Szukaj</button>
    </div>
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
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  handleProductSell(name: string) {
    alert(name);
  }

  search(name: string) {
    this.products = this.productService.searchProductByName(name);
  }


}
