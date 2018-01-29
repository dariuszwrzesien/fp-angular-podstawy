import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list-item',
  template: `
    <div>{{product.name}}</div>
    <div *ngIf="product.id === expandedProductId">{{product.description}}</div>
    <button type="button" class="btn btn-danger"
            (click)="toggle()">      
      Toggle
    <i class="fa" [ngClass]="{
                'fa-arrow-up':product.id === expandedProductId,
                'fa-arrow-down':product.id !== expandedProductId
    }"></i></button>
    <button type="button" 
            (click)="sellProduct()"
            class="btn btn-primary">Sprzedaj</button>
  `,
  styles: []
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Input() expandedProductId: number;
  @Output() expandedProductIdChange = new EventEmitter<number>();
  @Output() productSell = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.expandedProductIdChange.emit(this.product.id);
  }

  sellProduct() {
    this.productSell.emit(this.product.name);
  }

}
