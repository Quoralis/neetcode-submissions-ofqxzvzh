class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
  let res = ''
  for (let i = 0, l = strs.length; i < l; i++) {
    res += `${strs[i].length}#${strs[i]}`
  }
  return res
}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
  let resArr = [];
  let i = 0;
  let actIndex = 0
  let start = 0
  while (i < str.length) {
    if (str[i] === '#') {
      actIndex = i;
      let jump = Number(str.slice(start , i ));
      const row = str.slice(actIndex + 1,actIndex +jump +1)
      resArr.push(row);

      i = i + jump
      start = i + 1
    }
    i++

  }
  return resArr;
}
}
