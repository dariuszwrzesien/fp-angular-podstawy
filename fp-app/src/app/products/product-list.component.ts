import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {Subscription} from 'rxjs/Subscription';

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

  @ViewChild('searchInput') input: ElementRef;
  expandedProductId: number;
  products: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {

    this.search();
  }

  handleProductSell(name: string) {
    alert(name);
  }

  search(name: string = '') {
    this.productService.getProducts(name).subscribe(
      p => this.products = p
    );

  }

  ngAfterViewInit() {
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .debounceTime(500)
      .subscribe((e) => {
        console.log(e.target.value);
        this.search(e.target.value);
    })
  }


}
