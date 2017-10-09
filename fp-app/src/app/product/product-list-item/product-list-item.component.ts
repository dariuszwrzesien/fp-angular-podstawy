import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() onSellProduct = new EventEmitter<Product>();
  @Output() onExpandProduct = new EventEmitter<number>();
  @Input() expandedId: number;

  constructor() { }

  ngOnInit() {
    console.log(this.product)
  }

  expand(id: number) {
    const expandedId = this.expandedId === id ? null : id;
    this.onExpandProduct.emit(expandedId);
  }

  sellProduct(sellProduct: Product) {
    this.onSellProduct.emit(sellProduct);
  }

}
