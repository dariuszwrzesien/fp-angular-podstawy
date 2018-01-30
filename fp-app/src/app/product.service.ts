import { Injectable } from '@angular/core';
import {Product} from './models/Product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  getProducts(name: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products',
      {
        params: new HttpParams().set("name_like", name)
      });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/'+id);
  }

}
