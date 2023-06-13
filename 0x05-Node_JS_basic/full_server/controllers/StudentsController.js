import readDatabase from '../utils.js';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv')
      .then((fields) => {
        let studentsResponse = 'This is the list of our students\n';
        fields.forEach((field) => {
          studentsResponse += `Number of students in ${field.name}: ${field.students.length}. List: ${field.students}\n`;
        });
        response.status(200).send(studentsResponse);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase('./database.csv')
      .then((fields) => {
        const field = fields.find((f) => f.name === major);
        if (!field) {
          response.status(500).send('Cannot load the database');
          return;
        }
        response.status(200).send(`List: ${field.students}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
