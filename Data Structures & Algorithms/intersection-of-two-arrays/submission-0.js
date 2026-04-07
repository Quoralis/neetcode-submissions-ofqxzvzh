class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
    const result = new Set()
    if(nums1.length < nums2.length) {
      [nums1,nums2] = [nums2, nums1];
    }
    const hash = new Set(nums2);

    for (let i = 0; i < nums1.length; i++) {
      if(hash.has(nums1[i])) {
        result.add(nums1[i]);
      }
    }
    return [...result];
  }
}
