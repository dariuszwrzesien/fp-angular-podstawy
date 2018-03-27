import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {switchMap} from 'rxjs/operators';
import {Product} from '../models/product';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'fp-product-edit',
  template: `
      <pre>{{product | json}}</pre>
    <form [formGroup]="myForm">
      Title: <input type="text" formControlName="title"/>
      Description: <input type="text" formControlName="description"/>
      <button type="button" (click)="save(myForm)">Save</button>
    </form>
  `,
  styles: []
})
export class ProductEditComponent implements OnInit {

  myForm: FormGroup;
  product: Product;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', Validators.maxLength(10)],
      addresses: this.fb.array([
        this.fb.control('address1')
      ])
    });
    this.myForm.statusChanges.subscribe(x => console.log(x))
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.productService.getProductById(params['id']))
    ).subscribe(prod => {
      this.myForm.setValue({
        title: prod.title,
        description: prod.description
      })
    });

  }
  save(form: NgForm) {
    console.log(form);
  }

}
