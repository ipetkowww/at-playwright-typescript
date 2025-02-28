//Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it
//and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 1): number {
  const cm: number = 2.54;
  return inches * cm;
}

const defaultValue: number = convertToCentimeters();
console.log(`1 inch = ${defaultValue} cm.`);

const inputNumber: number = 30;
const incToCentimeter: number = convertToCentimeters(inputNumber);
console.log(`${inputNumber} inch = ${incToCentimeter} cm.`);
