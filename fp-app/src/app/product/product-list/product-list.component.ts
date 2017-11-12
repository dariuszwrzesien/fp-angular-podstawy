import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-product-list',
  templateUrl: "product-list.component.html"
})
export class ProductListComponent implements OnInit {

  private searchText = new BehaviorSubject<string>('');
  products: Observable<Product[]>;
  expandedId: number;

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.searchText
      .debounceTime(300)
      .switchMap(txt => this.productService.getProductsByName(txt));
  }

  handleProductSell(sellProduct: Product) {
    alert(sellProduct.name);
  }

  searchProduct(searchString: string) {
    this.searchText.next(searchString);
  }
}
