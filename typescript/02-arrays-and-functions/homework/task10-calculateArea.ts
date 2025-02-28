//Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
//If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
  return height !== undefined ? width * height : width * width;
}

let width: number = 20;
const height: number = 50;
let area: number = calculateArea(width, height);
console.log(
  `Area of figure with width=${width} and height=${height} is ${area}`
);

width = 5;
area = calculateArea(5);
console.log(`Area of figure with width=${width} is ${area}`);
