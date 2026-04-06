class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        
  let ones = 0;
  let zero = 0;
  let maxDiff = -Infinity;
  for (let i = 0; i < s.length - 1; i++) {
    s[i] === '0' ? zero++ : ones++;

    maxDiff = Math.max(maxDiff, zero - ones);
  }
  if (s[s.length - 1] === '1') ones ++
  return ones + maxDiff;
    }
}
