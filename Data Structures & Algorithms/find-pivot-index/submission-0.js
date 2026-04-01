class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums){
  let leftSum = 0;
  let rightSum = 0;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - nums[i] - leftSum;
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i]
  }
  return -1;
}
}
