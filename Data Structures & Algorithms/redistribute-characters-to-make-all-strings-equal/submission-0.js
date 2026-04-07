class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
    const resStr = words.join('');
    const hash = new Map();

    for (let i = 0; i < resStr.length; i++) {
      if (!hash.has(resStr[i])) {
        hash.set(resStr[i], 1);
      } else {
        hash.set(resStr[i], hash.get (resStr[i]) + 1)
      }
    }

    for ( const [_,value] of hash) {
      if( value % words.length !== 0 ) {
        return false;
      }
    }
    return true;
  }
}
