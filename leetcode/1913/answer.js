/**
 * 80ms
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const lastIndex = sortedNums.length - 1;
  return sortedNums[lastIndex] * sortedNums[lastIndex - 1] - sortedNums[0] * sortedNums[1];
};

/**
 * 다른 답안 51ms
 * splice로 하나를 빼버리면 다시 재정렬하느라 오래걸릴 줄 알았는데
 * 아예 배열 하나를 통째로 정렬하는 것보다 빠르다...?
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);
  let max2 = Math.max(...nums);
  let min = Math.min(...nums);
  nums.splice(nums.indexOf(min), 1);
  let min2 = Math.min(...nums);
  return max * max2 - min * min2;
};
