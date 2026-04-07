class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  minOperations(s) {
    let countA = 0 // '1010
    let countB = 0 // '0101

    for (let i = 0; i < s.length; i++) {
      let expChar = i % 2 === 0 ? '0' : '1'

      s[i] !== expChar ? countA++ : countB++
    }
    return Math.min(countA, countB)
  }

}