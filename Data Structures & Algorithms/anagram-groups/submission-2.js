class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const hash = new Map();

  for (let i = 0, len = strs.length; i < len; i++) {
    const arrSymb = new Array(27).fill(0);
    for (let j = 0, len = strs[i].length; j < len; j++) {
      arrSymb[strs[i][j].toLowerCase().charCodeAt(0) - 96] += 1;
    }
    let key = arrSymb.join('-');
    if (!hash.has(key)) {
      hash.set(key, [strs[i]]);
    } else {
      hash.get(key).push(strs[i]);
    }
  }
  return Array.from(hash.values());
}
}
