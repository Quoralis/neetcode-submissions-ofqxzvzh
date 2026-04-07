class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
    const hastStudents = [0, 0];
    for (const student of students) hastStudents[student]++;
    for (const sandwich of sandwiches)
      if (hastStudents[sandwich] !== 0) hastStudents[sandwich]--;
      else break;

    return hastStudents[0] + hastStudents[1];
  }
}
