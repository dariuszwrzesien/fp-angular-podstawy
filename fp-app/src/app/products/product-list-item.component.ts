import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list-item',
  template: `
    <p>
      product-list-item works!
    </p>
  `,
  styles: []
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productSell = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
