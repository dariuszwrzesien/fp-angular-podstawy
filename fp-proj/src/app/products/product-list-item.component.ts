import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../product';

@Component({
  selector: 'fp-product-list-item',
  template: `
    <div class="card">
      <div class="card-header">
      Product: {{product.title}}
      Price: {{product.price | currency : 'USD' : 'code'}}
        <button (click)="toggleDescription()" 
                [ngClass]="{
                'btn-warning': expandedId === product.id,
                'btn-danger': expandedId !== product.id}"                
                class="btn">Toggle</button>
      </div>
      <div class="card-body" *ngIf="expandedId === product.id">
        {{product.description}}
        <pre>{{product | json}}</pre>
      </div>
    </div>
    <button [routerLink]="['/products', product.id, 'edit']"
      class="btn btn-primary">Edit</button>'
    <input [(ngModel)]="product.price" #inputValue />
    {{inputValue.value}}
  `,
  styles: []
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productSell = new EventEmitter<string>();
  @Input() expandedId: number;
  @Output() expandedIdChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sellProduct() {
    this.productSell.emit(this.product.title.toUpperCase())
  }

  toggleDescription() {
    this.expandedIdChange.emit(this.product.id);
  }

}
