export class User {
    private age: number;

    constructor(private name: string, age: number) {
        this.age = age;
    }

    printHello(): string {
        return `Hello ${this.name}!`
    }
}