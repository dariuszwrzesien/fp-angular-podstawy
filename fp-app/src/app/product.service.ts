import { Injectable } from '@angular/core';
import {Product} from './models/Product';

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

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  searchProductByName(name: string): Product[] {
    return this.products.filter(p => p.name.includes(name));
  }

}
