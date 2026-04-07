class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
    let attempts = 0
    while (students.length > 0 && attempts < students.length) {
      if(sandwiches[0] === students[0]) {
        sandwiches.shift()
        students.shift()
        attempts = 0
      }else {
        students.push(students.shift())
        attempts++
      }
    }
    return students.length
  }
}
