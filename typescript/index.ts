// console.log('Hello, TypeScript!');

// let vs const - comes with ECMAScript 6 (replace var)
// let - mutable variable (can be reassigned)
let number: number = 5;
number = 10;
console.log(number);

// const - immutable variable (cannot be reassigned)
// const message: string = 'Welcome';
// message = 'Hello'; // error

// string
let welcomeMessage: string = "Hello, TypeScript!";
let anotherMessage: string = 'Another message';

// string interpolation
let myName: string = 'John';
let greeting: string = `Hello, ${myName}`;
console.log(greeting);

// number
let firstNumber: number = 5;
let secondNumber: number = 10;

// number math operations
let result: number = firstNumber - secondNumber;
console.log(`${firstNumber} - ${secondNumber} = ${result}`);

result = firstNumber + secondNumber;
console.log(`${firstNumber} + ${secondNumber} = ${result}`);

result = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${result}`);

result = firstNumber / secondNumber;
console.log(`${firstNumber} / ${secondNumber} = ${result}`);

// boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 11 === secondNumber;

// any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("stringValue", stringValue);