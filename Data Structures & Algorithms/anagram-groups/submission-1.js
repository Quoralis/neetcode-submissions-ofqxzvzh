class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  groupAnagrams(strs) {
  const hashTable = new Map();
  strs.forEach(str => {
    let key = '';
    const arr = new Array(26).fill(0); // 26 мал. буквы в алфавите
    for (let ch of str) {
      if (arr[ch.charCodeAt(0) - 97] !== 0) {
        arr[ch.charCodeAt(0) - 97] += 1;
      } else {
        arr[ch.charCodeAt(0) - 97] = 1;
      }
    }
    key = arr.join('-');
    if (!hashTable.has(key)) {
      hashTable.set(key, [str]);
    } else {
      hashTable.get(key).push(str);
    }
  });
  return [...hashTable.values()];
}
}
