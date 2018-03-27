import { Injectable } from '@angular/core';
import {Product} from './models/product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProductService {
  private _products: Product[] = [{
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

  private productsSubject$ = new BehaviorSubject<Product[]>(this._products);

  constructor(private http: HttpClient) { }

  getProductObservable(): Observable<Product[]> {
    return this.productsSubject$.asObservable()
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  searchProductByName(title: string): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products',{
       params: new HttpParams().set('title_like', title)
    });
    //this.productsSubject$.next(this._products.filter(x => x.title.includes(title)))
  }

}
