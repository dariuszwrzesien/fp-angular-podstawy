import { Injectable } from '@angular/core';
import {Product} from './models/Product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProductService {
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
  private products$ = new BehaviorSubject<Product[]>(this.products);
  constructor(private http: HttpClient) { }

  getProducts(name: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products',
      {
        params: new HttpParams().set("name_like", name)
      });
  }

}
