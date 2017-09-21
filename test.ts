import { Address } from './address';

export class Test {
    private testName: string;
    constructor(newName: string, private address: Address) {
        this.testName = newName;
    }

    hello() {
        return `Hello, I am ${this.testName} 
        from ${this.address.city}(${this.address.country}).`;
    }
}
