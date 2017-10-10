import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'dsdjijif ij eidjwei',
    price: 1.5
  },{
    id: 2,
    name: 'Product 2',
    description: 'dsdjijif ij eidjwei',
    price: 2
  },{
    id: 3,
    name: 'Product 3',
    description: 'dsdjijif ij eidjwei',
    price: 3.5
  },{
    id: 4,
    name: 'Product 4',
    description: 'dsdjijif ij eidjwei',
    price: 4.5
  }];

  constructor( private http: HttpClient ){

  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products',
      {
        params: new HttpParams().set("name_like", name)
      });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  addProduct(product: Product) {
    return this.http.post<any>('http://localhost:3000/products', product);
  }

  updateProduct(product: Product) {
    return this.http
      .put<any>('http://localhost:3000/products/' + product.id, product);
  }
}
