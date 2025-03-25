// Exercise 1: Check if a number is even or odd
const num: number = 4;
const isEven: boolean = num % 2 === 0;
console.log(`Is number ${num} even? - ${isEven}`);

// Exercise 2: Check if a string has more than 10 characters
const text: string = "My name is Ivan Petkov";
const isHasMoreThan10Chars: boolean = text.length > 10;
console.log(`Does the text: "${text}" have more than 10 characters? - ${isHasMoreThan10Chars}`);

// Exercise 3: Verify if a number is positive
const number: number = 5;
const isPositive: boolean = number > 0;
console.log(`Is number ${number} positive? - ${isPositive}`);

// Exercise 4: Determine if a number is negative or zero
const numCheck: number = 0;
const isNonPositive: boolean = numCheck <= 0;
console.log(`Is number ${numCheck} negative or zero? - ${isNonPositive}`);

// Exercise 5: Check if a string is empty
const message: string = "";
const isEmpty: boolean = message.length === 0;
console.log(`Is the message "${message}" empty? - ${isEmpty}`);

// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
const rangeNumber: number = 101;
const isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
console.log(`Is number ${rangeNumber} within the range 10 to 100 inclusive? - ${isInRange}`);

// Exercise 7: Check if a number is either 0 or 100
const specialNumber: number = 100;
const isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;
console.log(`Is number ${specialNumber} either 0 or 100? - ${isZeroOrHundred}`);

// Exercise 8: Verify if a boolean value is true
const flag: boolean = false;
const isTrue: boolean = flag;
console.log(`Is the flag "${flag}" true? - ${isTrue}`);

// Exercise 9: Check if a number is odd and greater than 50
const oddCheck: number = 51;
const isOddAndLarge: boolean = oddCheck % 2 !== 0 && oddCheck > 50;
console.log(`Is number ${oddCheck} odd and greater than 50? - ${isOddAndLarge}`);

// Exercise 10: Determine if a string starts with the letter 'A'
const word: string = "apple";
const startsWithA: boolean = word.startsWith('A');
console.log(`Does the word "${word}" start with the letter 'A'? - ${startsWithA}`);

export {}; // Added to avoid the error: "Cannot redeclare block-scoped variable".