import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  @Input() product: Product;

  @Input() isEdit: boolean;

  @Output() onSave = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      price: ['', [Validators.required, this.priceRangeValidator]]
    });
  }

  onSubmit(value: Product) {
    this.onSave.emit({
      id: this.isEdit ? this.product.id : undefined,
      name: value.name,
      description: value.description,
      price: value.price
    });
  }

  ngOnInit() {
    if (this.product) {
      this.productForm.setValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price
      });
    }
  }
  private priceRangeValidator(control: AbstractControl): {[key: string]: any} {
      return control.value < 0 || control.value > 1000 ? { 'priceOutOfRange': true } : null;
  }
}
