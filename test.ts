import {User} from './user';

let a: number = 1;
let b = 'test';

let t: string | number;

t = 1;
t = 'test';

interface CustomType {
    name: string;
    age?: number;
}

let x: CustomType = {
    name: 'myName',
};

function getName(obj: CustomType): string {
    return obj.name;
};

let u: User = new User('Alojzy', 18);


console.log(u.printHello());