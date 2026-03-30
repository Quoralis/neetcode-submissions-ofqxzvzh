class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const hashTable = new Map();

  for (let char of s) {
    if( hashTable.has(char) ) {
      hashTable.set(char, hashTable.get(char) + 1);
    } else {
      hashTable.set(char,1);
    }
  }
  for (let char of t) {
    if(hashTable.has(char) && hashTable.get(char) !== 0) {
      hashTable.set(char, hashTable.get(char) - 1) ;
      if (hashTable.get(char) === 0) hashTable.delete(char);
    }
  }
  return hashTable.size === 0
}
}