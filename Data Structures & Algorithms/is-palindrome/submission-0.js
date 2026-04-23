class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
      isPalindrome(s) {
    let cleanStr = '';
    for (const char of s.toLowerCase()) {
      const code = char.charCodeAt(0);
      if (code >= 48 && code <= 57 || code >= 97 && code <= 122) {
        cleanStr += char;
      }
    }

    for (let i = 0, l = cleanStr.length; i < l/2; i++) {
      if(cleanStr[i] !== cleanStr[l - 1 - i]) {
        return false
      }

    }
    return true;
  }
}
