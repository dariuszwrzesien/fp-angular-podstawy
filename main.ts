import {Product} from './Product';
import {Cart} from './Cart';

let product1: Product = {
    name: 'prod1',
    price: 10,
    description: 'descr1',
    id: 1
};

let product2: Product = {
    name: 'prod2',
    price: 20,
    description: 'descr2',
    id: 2
};

let cart: Cart = new Cart();
cart.add(product1);
cart.add(product2);

console.log(cart.getAll());