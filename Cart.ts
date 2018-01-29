import {Product} from './Product';

export class Cart {
    private totalPrice: number = 0;
    private products: Product[] = [];

    add(product: Product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }

    getAll(): string {
        let productList = this.products.map(p => p.name).join(',');
        return `Products: ${productList} | Total: ${this.totalPrice}`
    }
}