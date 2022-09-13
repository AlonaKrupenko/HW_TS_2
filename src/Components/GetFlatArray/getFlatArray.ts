const testArr = [
  1,
  { name: "Aaaaa", age: 666, arr: ["k", "m", "l"] },
  [3, 4, "", [5, [12, [undefined, null], 13, 15], 6], true],
];
const testArr2 = true;

function getFlatArray(array: any[], ...otherArgs: any): any[] {
  const resultArray: any[] = [];

  if (arguments.length > 1)
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );

  (function handleArray(array) {
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] === "") {
        i++;
      }

      if (Array.isArray(array[i])) {
        handleArray(array[i]);
      } else {
        resultArray.push(array[i]);
      }
    }
  })(array);

  return resultArray;
}

console.log(getFlatArray(testArr));
