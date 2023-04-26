export default function updateStudentGradeByCity(arrays, city, newGrades) {
  return arrays
    .filter((elm) => elm.location === city)
    .map((person) => {
      const grades = newGrades.filter((elm) => elm.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
