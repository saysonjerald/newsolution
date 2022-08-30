/* eslint-disable no-plusplus */
const findIndiesOfTwo = (array, target) => {
  if (!array && !target) return;

  for (let p1 = 0; p1 < array.length; p1++) {
    const numberToFind = target - array[p1];
    for (let p2 = p1 + 1; p2 < array.length; p2++) {
      if (numberToFind === array[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

const numbers = [1, 23, 4, 5, 6, 7, 8, 9, 0, 4, 23, 4, 3, 5, 6];

console.log(findIndiesOfTwo(numbers, 15));
