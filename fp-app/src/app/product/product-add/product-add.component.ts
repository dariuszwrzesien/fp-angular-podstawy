import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }
  handleSave(product: Product) {
    this.productService.addProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
