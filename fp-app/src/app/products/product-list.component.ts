import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product-list',
  template: `
    <pre>{{product$ | async | json}}</pre>
    <div>
      <input type="text" #searchInput/> 
      <button type="button" class="btn btn-warning" 
              (click)="search(searchInput.value)">Szukaj</button>
    </div>
    <app-product-list-item *ngFor="let product of product$ | async"
      [product]="product"
      [(expandedProductId)]="expandedProductId"
      (productSell)="handleProductSell($event)">

    </app-product-list-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  @ViewChild('searchInput') input: ElementRef;
  expandedProductId: number;
  product$: Observable<Product[]>;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.product$ = this.productService.getProducts();
  }

  handleProductSell(name: string) {
    alert(name);
  }

  search(name: string) {
    this.productService.searchProductByName(name);
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .debounceTime(500)
      .subscribe((e) => {
        console.log(e.target.value);
      this.productService
        .searchProductByName(e.target.value);
    })
  }


}
