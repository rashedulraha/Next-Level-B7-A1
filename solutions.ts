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
