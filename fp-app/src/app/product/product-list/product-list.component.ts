import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: "product-list.component.html"
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'blablabla asdasdasd',
    price: 1.5
  },{
    id: 2,
    name: 'Product 2',
    description: 'blablabla asdasdasd',
    price: 2
  },{
    id: 3,
    name: 'Product 3',
    description: 'blablabla asdasdasd',
    price: 3.5
  },{
    id: 4,
    name: 'Product 4',
    description: 'blablabla asdasdasd',
    price: 4.5
  }];
  expandedId: number;

  constructor(){}

  ngOnInit(){
  }

  handleProductSell(sellProduct: Product) {
    alert(sellProduct.name);
  }

  handleExpand(id: number) {
    this.expandedId = id;
  }

}
