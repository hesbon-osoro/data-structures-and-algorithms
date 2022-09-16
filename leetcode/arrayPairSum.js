function arrayPairSum(nums) {
  return (
    nums
      // making a copy
      .map((x, i) => ({ index: i, value: x }))
      // sorting an optimized array copy
      .sort((a, b) => +(a.value > b.value) || +(a.value === b.value) - 1)
      // copying back into the original array
      .map(x => nums[x.index])
      // summing the values in even indices
      .reduce((x, t, i) => x + (i % 2 === 0 ? t : 0), 0)
  );
  // return nums
  // 	.sort((a, b) => a - b)
  // 	.reduce((total, item, index) => total + (index % 2 === 0 ? item : 0), 0);
}
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
