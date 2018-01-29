import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list-item',
  template: `
    <p>
      {{product.name}}
    </p>
    <button type="button" 
            (click)="sellProduct()"
            class="btn btn-primary">Sprzedaj</button>
  `,
  styles: []
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productSell = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sellProduct() {
    this.productSell.emit(this.product.name);
  }

}
