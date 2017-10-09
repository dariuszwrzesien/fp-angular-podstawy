import { Cart } from './cart';

let cart = new Cart();
cart.addProduct({
    id:1,
    name: 'p1',
    description: 'sdfdsfsdfsdfsdfds',
    price: 2.3
});
cart.addProduct({
    id:2,
    name: 'p2',
    description: 'sdfdsfsdfsdfsdfds',
    price: 5.3
});

console.log(cart.getAllProducts());
console.log(cart.totalPrice);

