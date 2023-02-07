/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
  let max = 0;
  let basket = {};
  let start = 0;
  let end = 0;

  while (end < fruits.length) {
    if (Object.keys(basket).length <= 2) {
      basket[fruits[end]] = end;
      end++;
    }

    if (Object.keys(basket).length > 2) {
      let min = fruits.length - 1;
      for (let key in basket) {
        min = Math.min(min, basket[key]);
      }
      delete basket[fruits[min]];
      start = min + 1;
    }

    max = Math.max(max, end - start);
  }

  return max;
};
