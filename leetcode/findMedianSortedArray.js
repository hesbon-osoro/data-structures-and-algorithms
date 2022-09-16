const findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  return median(merged);
};

const median = arr => {
  let mid = Math.floor(arr.length / 2);
  return arr.length % 2 !== 0 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;
};
