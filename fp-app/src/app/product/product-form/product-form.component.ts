import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators} from '@angular/forms';
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
      enableDescription: true,
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

    // zaleznosci miedzy polami w ReactiveForms najprosciej ogarniac właśnie subskrybcją do zmian w formularzu lub
    // jak w tym przypadku do konkretnego pola
    this.productForm.controls['enableDescription'].valueChanges.subscribe( (enableDescription) => {
      this.enableFormField(enableDescription, 'description');
    })
  }

  private priceRangeValidator(control: AbstractControl): {[key: string]: any} {
      return control.value < 0 || control.value > 1000 ? { 'priceOutOfRange': true } : null;
  }

  // każdy formGroup jak i kontrolka udostępniają metody disable i enable.
  // trzeba jednak pamietac ze disable wyrzuca wartosc z danych formularza (mozna je wydostac z danych Raw)
  // Opcja onlySelf jest ustawiona na true - powoduje to sprawdzenie jedynie zmiany tego pola a nie calego formularza.
  // Z tej metody mozna zrobic dyrektywe lub serwis :) umiescilem tu dla widocznosci przykladu
  private enableFormField(condidtion: boolean, destinationFieldName) {
    condidtion ? this.productForm.get(destinationFieldName).enable({onlySelf: true})
      : this.productForm.get(destinationFieldName).disable({onlySelf: true});
  }
}
