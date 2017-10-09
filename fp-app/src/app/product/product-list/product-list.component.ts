import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: "product-list.component.html"
})
export class ProductListComponent implements OnInit {

  products: Product[];
  expandedId: number;

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products =this.productService.getAllProducts();
  }

  handleProductSell(sellProduct: Product) {
    alert(sellProduct.name);
  }

  handleExpand(id: number) {
    this.expandedId = id;
  }

  searchProduct(searchString: string) {
    this.products = this.productService.getProductsByName(searchString)
  }
}
