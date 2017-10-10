import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.productService.getById(params['id']))
      .subscribe((product: Product) => this.product = product);
  }

  handleSave(product: Product) {
    this.productService.updateProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

}
