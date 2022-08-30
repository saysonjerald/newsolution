/* eslint-disable no-plusplus */
const sumTwo = (nums, target) => {
  const numsMap = {};
  console.log(numsMap);

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    console.log({ currentMapVal });

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    }

    const numberTofind = target - nums[p];
    console.log({ numberTofind });

    numsMap[numberTofind] = p;
    console.log({ numsMap });
  }

  return null;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumTwo(array, 4));
