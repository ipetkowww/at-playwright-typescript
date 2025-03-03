//Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it
//and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 1): number {
  const cm: number = 2.54;
  return inches * cm;
}

const defaultValue: number = convertToCentimeters();
console.log(`1 inch = ${defaultValue} cm.`);

const incToCentimeter: number = convertToCentimeters(30);
console.log(`30 inch = ${incToCentimeter} cm.`);
