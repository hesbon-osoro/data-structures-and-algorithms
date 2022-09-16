function sortArrayByParity(nums) {
  // return [...nums.filter(x => x % 2 === 0), ...nums.filter(x => x % 2 !== 0)];
  let sorted = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sorted.unshift(nums[i]);
    } else {
      sorted.push(nums[i]);
    }
  }
  return sorted;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
