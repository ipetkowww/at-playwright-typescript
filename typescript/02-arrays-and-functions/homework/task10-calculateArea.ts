//Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
//If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
  return height !== undefined ? width * height : width * width;
}

let area: number = calculateArea(20, 50);
console.log(`Area of figure with width=20 and height=50 is ${area}`);

area = calculateArea(5);
console.log(`Area of figure with width=5 is ${area}`);
