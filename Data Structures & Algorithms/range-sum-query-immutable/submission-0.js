class NumArray {
  constructor(nums) {
    this.sums = new Array(nums.length + 1);
    this.sums[0] = 0;
    for (let i = 0; i < nums.length; i++) {
      this.sums[i + 1] = nums[i] + this.sums[i];
    }
  }

  sumRange(left, right) {
    console.log(this.sums);
    return this.sums[right +1] - this.sums[left];

  }
}