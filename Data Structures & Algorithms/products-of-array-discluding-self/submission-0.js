class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
  const res = new Array(nums.length);
  let rightWeight = 1; // начало права
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * rightWeight;
    rightWeight *= nums[i];
  }

  return res;
    }
}
