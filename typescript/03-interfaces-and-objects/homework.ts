interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?(): string;
}

const person1: Person = {
  name: "Ivan",
  lastName: "Petkov",
  age: 22,
  email: "test@asd.com",
  phoneNumber: 23456789,
};

const person2: PersonInfo = {
  name: "Georgi",
  lastName: "Petrov",
  age: 28,
  email: "g@test.com",
  phoneNumber: 234567,
  country: "Bulgaria",
  greeting(): string {
    return `Hello, I am ${this.name} ${this.lastName}.`;
  },
};

console.log(person1);
console.log(person2);
