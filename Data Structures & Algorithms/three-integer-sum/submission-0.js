class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    const result = [];

    const sortNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortNums.length; i++) {
      let left = i + 1;
      let right = sortNums.length - 1;
      if(i > 0 && nums[i] === nums[i-1]) continue;

      while (left < right) {
        if (nums[left] + nums[right] === -nums[i]) {
          result.push([nums[i], nums[left], nums[right]])
          right--
          left ++;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (nums[left] + nums[right] > -nums[i]) {
          right--;
        } else left++;
      }
    }
    return result;
  }
}
