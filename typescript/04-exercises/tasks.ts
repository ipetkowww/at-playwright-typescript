// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface
const country: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 8000000,
  language: "Bulgarian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it
function displayCountryDetails(country: Country): void {
  console.log(country);
}

displayCountryDetails(country);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentIvan: Student = {
  id: 222,
  name: "Ivan",
  age: 20,
  grade: 5,
};

const studentGeorgi: Student = {
  id: 333,
  name: "Georgi",
  age: 21,
  grade: 4,
};

const studentPesho: Student = {
  id: 444,
  name: "Pesho",
  age: 20,
  grade: 5.5,
};

const studentAngel: Student = {
  id: 555,
  name: "Angel",
  age: 22,
  grade: 3,
};

// Step Three: Declare array "students" with objects of type "Student"
const students: Student[] = [
  studentIvan,
  studentGeorgi,
  studentPesho,
  studentAngel,
];

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudents(array: Student[]): string[] {
  return array.map((s) => s.name);
}

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
function sortStudents(array: string[]): string[] {
  return array.sort((a, b) => a.localeCompare(b));
}

const studentNames: string[] = getStudents(students);
console.log("Unsorted students: ", studentNames);
const sortedStudents = sortStudents(studentNames);
console.log("Sorted students: ", sortedStudents);
