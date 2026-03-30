class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
  const hashTable = new Map();

  for( let i = 0; i < nums.length; i++ )  {
    let cur = target - nums[i]
    if(hashTable.has(cur)) {
      return [i,hashTable.get(cur)];
    } else {
      hashTable.set(nums[i], i);
    }
  }
}
}
