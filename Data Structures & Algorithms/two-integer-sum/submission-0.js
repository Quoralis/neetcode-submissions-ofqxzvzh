class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if(hashTable.has(x)) {
      return [hashTable.get(x),i]
    }
    hashTable.set(nums[i], i);
  }
}
}
