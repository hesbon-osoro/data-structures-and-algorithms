const SmallestInfiniteSet = function () {
  this.hash = {};
  this.smallest = 1;

  for (let i = 1; i <= 1000; i++) {
    this.hash[i] = i;
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let i = this.smallest;

  while (this.hash[i] == 0) {
    i++;
  }

  this.hash[i] = 0;
  this.smallest = i + 1;
  return i;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.hash[num] == 0) this.hash[num] = num;
  if (num < this.smallest) this.smallest = num;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
