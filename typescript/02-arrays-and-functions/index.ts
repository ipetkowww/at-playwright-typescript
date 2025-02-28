// ternary operator
const isPositive: string = 5 > 0 ? "The number is positive" : "The number is negative";
console.log(isPositive);

const age: number = 30;
const myName: string = "Pesho";
const personDescription: string = age < 40 ? 
`${myName} is younger than 40. He is ${age} years old` : 
`${myName} is older than 40. He is ${age} years old`;

console.log(personDescription);

const personName: string = `His name is "${myName}"`;
console.log(personName);

// if-else statement
if (age < 40) {
    console.log("Age are lower than 40")
} else {
    console.log("Age are greater than 40")
}

export {};