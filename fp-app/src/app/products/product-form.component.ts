import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-form',
  template: `
    <form [formGroup]="productForm" (ngSubmit)="save(productForm.value)">
      <input type="text" formControlName="name"/>
      <textarea formControlName="description"></textarea>
      <input type="number" formControlName="price"/>
      <button>Save</button>
    </form>
  `,
  styles: []
})
export class ProductFormComponent implements OnInit {

  @Output() saveForm = new EventEmitter<Product>();
  productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['sadsa', [Validators.required, Validators.maxLength(10)] ],
      description: '',
      price: 0
    })

  }

  save(product: Product){
    this.saveForm.emit(product);
  }
}
