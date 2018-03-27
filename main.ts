import {Product} from './product';
import {Cart} from './cart';

let arr = [1,2,3,4,5];
let arr2 = [0,0];
let newArr = [...arr2, ...arr];
const obj = {
    test1: 1,
    test2:2
};

function myFunc(p1: number, ...allParams:number[]) {
    console.log(allParams)
}

myFunc(1,2,3,4,5,6);

console.log(newArr);
let cart = new Cart();

let p1: Product = {
    title: 'prod2',
    description: 'descr2',
    id:2,
    price: 2.99
};

cart.addProduct({
    title: 'prod1',
    description: 'descr1',
    id:1,
    price: 0.99
});
cart.addProduct(p1);
console.log(cart.showAll());