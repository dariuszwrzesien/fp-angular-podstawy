import { Injectable } from '@angular/core';
import { Product } from '../models/product';

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

  getAllProducts(): Product[] {
    return this.products;
  }
  getProductsByName(name: string): Product[] {
    return this.products.filter(p => p.name.includes(name));
  }
}
