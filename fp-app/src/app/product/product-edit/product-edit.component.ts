import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      price: ['', [Validators.required, this.priceRangeValidator]]
    });
  }

  onSubmit(value: Product) {
    console.log(value);
  }

  ngOnInit() {
  }

  private priceRangeValidator(control: AbstractControl): {[key: string]: any} {
      return control.value < 0 || control.value > 1000 ? { 'priceOutOfRange': true } : null;
  }
}
