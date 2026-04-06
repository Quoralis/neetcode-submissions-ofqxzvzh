class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
    const solutions = new Set(['0:0']);
    let x = 0;
    let y = 0;
    const ways = {
      'N': [0, 1],
      'S': [0, -1],
      'W': [1, 0],
      'E': [-1, 0],
    };
    for (let char of path) {
      const [dx, dy] = ways[char];
      x += dx;
      y += dy;
      const pair = `${x}:${y}`;
      if (solutions.has(pair)) {
        return true;
      } else {
        solutions.add(pair);
      }
    }
    return false;
  }
}
