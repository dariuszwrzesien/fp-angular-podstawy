import { Product } from './Product';

export class Cart {
    totalPrice: number;
    private products: Product[];

    constructor() {
        this.totalPrice = 0;
        this.products = [];
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }

    getAllProducts(): Product[] {
        return this.products;
    }
}