import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../product.service';
import {Subject} from 'rxjs/Subject';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'fp-product-list',
  template: `    
    Sercz: <input class="form-control" #searchInput (input)="search(searchInput.value)"/>
    <fp-product-list-item *ngFor="let product of products"
      (productSell)="handleProductSell($event)"             
      [(expandedId)]="expandedId"
      [product]="product"></fp-product-list-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  searchQuery$ = new Subject<string>();
  expandedId: number;
  products: Product[];

  constructor(private productService: ProductService) {
    productService.getAllProducts().subscribe(
      prod => this.products = prod
    );
    /*productService.getProductObservable().subscribe(
      products => this.products = products
    );
    this.searchQuery$
      .debounceTime(500)
      .subscribe(title => console.log(title));*/
    this.searchQuery$.pipe(
      debounceTime(500),
      switchMap(t => this.productService.searchProductByName(t))
    ).subscribe(
      p => this.products = p
    )
  }

  ngOnInit() {
  }

  handleProductSell(name: string){
    alert(name);
  }

  search(title: string) {
    this.searchQuery$.next(title);
  }

}
