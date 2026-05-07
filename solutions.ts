//* Problem 1:
const filterEvenNumbers = (filterInput: Array<number>): Array<number> => {
  const evenNumber: Array<number> = [];
  filterInput.map((element) => {
    if (element % 2 === 0) {
      evenNumber.push(element);
    }
  });

  return evenNumber;
};

const result = filterEvenNumbers([2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 34, 56, 1]);
// console.log(result);

// * Problem 2 :

const reverseString = (element: string) => {
  const reverseString = [...element].reverse().join("");
  return reverseString;
};

const reverseResult = reverseString("Hello");
// console.log(reverseResult);

// * problem 3
type TypeGuard = string | number;

const checkType = (input: TypeGuard) => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const checkTypeResult1 = checkType(5);
const checkTypeResult2 = checkType("Hello");
// console.log(checkTypeResult1, checkTypeResult2);

//* problem 4
interface IUser {
  id: number;
  name: string;
  age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Sample Usage:
const user = { id: 1, name: "John Doe", age: 21 };

const userName = getProperty(user, "name");
const userAge = getProperty(user, "age");

//* problem number 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

// Sample Usage:
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const updatedBook = toggleReadStatus(myBook);
// console.log(updatedBook);

//* problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    ((this.name = name), (this.age = age));
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

//* problem number 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}

// Sample Usage:
const resultGetInterSection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(resultGetInterSection);
