import { Injectable } from '@angular/core';
import {Product} from './models/Product';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private products$ = new Subject<Product[]>();
  private products: Product[] = [{
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

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }
  getAllProducts() {
    this.products$.next(this.products);
  }

  searchProductByName(name: string) {
    this.products$.next(this.products.filter(p => p.name.includes(name)));
  }

}
