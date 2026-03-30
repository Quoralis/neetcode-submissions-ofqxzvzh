class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashTable.set(nums[i], (hashTable.get(nums[i]) || 0) + 1);
  }

  const buckets = new Array(nums.length + 1).fill().map(() => []);

  for (const [key, val] of hashTable) {
    buckets[val].push(key);
  }
  let results = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      results.push(...buckets[i]);
      if(results.length === k) {
        return  results
      }
    }
  }
}
}
