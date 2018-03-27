import {Product} from './product';

export class Cart {
    private totalPrice = 0;
    private products: Product[] = [];

    addProduct(prod: Product) {
        this.totalPrice += prod.price;
        this.products.push(prod);
    }

    showAll(): string {
        let productList = this.products.map(x => x.title).join(', ');
        return `Products: ${productList}
        Total price: ${this.totalPrice}`
    }
}