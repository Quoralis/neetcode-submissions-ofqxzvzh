class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let min = 0;
    let maxL = 0;

    for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i] - 1)) {
        let curL = 0;
        min = nums[i];
        while (set.has(min)) {
          min++;
          curL = curL + 1;
          maxL = Math.max(maxL, curL);
        }
      }
    }
    return maxL;
  }
}