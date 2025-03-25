//Write a function named “findLargest” that takes three numbers as parameters and returns the
//largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(
  firstNumber: number,
  secondNumber: number,
  thirdNumber: number
): number {
  let largest: number;

  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    largest = firstNumber;
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    largest = secondNumber;
  } else {
    largest = thirdNumber;
  }

  return largest;
}

const largestNumber: number = findLargest(2, 33, 29);
console.log(largestNumber);
