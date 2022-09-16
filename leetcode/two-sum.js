function twoSums(nums, target) {
  let ref = {};
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (rem in ref) {
      return [ref[rem], i];
    }
    ref[nums[i]] = i;
  }
  return null;
}
console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([-1, -2, -3, -4, -5], -8));
console.log(twoSums([2, 5, 5, 11], 10));
console.log(twoSums([1, 3, 4, 2], 6));
