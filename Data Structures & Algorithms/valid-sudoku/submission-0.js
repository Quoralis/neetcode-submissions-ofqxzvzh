class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: board.length }, () => new Set());
    const cols = Array.from({ length: board.length }, () => new Set());
    const boxes = Array.from({ length: board.length }, () => new Set());

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        const value = board[row][col];

        const indexBox= Math.floor(row /3) * 3 + Math.floor(col/3);

        if (value !== '.') {
          if (rows[row].has(value) || cols[col].has(value) || boxes[indexBox].has(value)) return false;
          rows[row].add(value);//   здесь клажем строки по папкам
          cols[col].add(value);// здесь в каждую папку по цифре
          boxes[indexBox].add(value);
        }
      }
    }
    return true;
  }
}