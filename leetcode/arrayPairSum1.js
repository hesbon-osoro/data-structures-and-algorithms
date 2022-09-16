function arrayPairSum(nums) {
  let hash = [];
  for (let i = 0; i <= 20000; ++i) {
    hash[i] = 0;
  }
  let sum = 0;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; ++i) {
    let cur = nums[i] + 10000;
    ++hash[cur];
    min = Math.min(min, cur);
    max = Math.max(max, cur);
  }
  let evenOdd = 0;
  for (let i = min; i <= max; ++i) {
    let curAmount = hash[i];
    for (let j = 0; j < curAmount; ++j) {
      if (evenOdd === 0) {
        sum += i - 10000;
      }
      evenOdd ^= 1;
    }
  }
  return sum;
}
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
