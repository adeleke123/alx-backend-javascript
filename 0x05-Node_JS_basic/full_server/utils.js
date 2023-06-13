import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export default function readDatabase(filePath) {
  return readFile(filePath, 'utf-8')
    .then((data) => {
      const records = data.split('\n');
      const csMajor = {
        name: 'CS',
        students: [],
      };
      const sweMajor = {
        name: 'SWE',
        students: [],
      };
      const fields = [csMajor, sweMajor];

      for (const index in records) {
        if (index > 0) {
          const [student, , , field] = records[index].split(',');
          if (field === 'CS') {
            csMajor.students.push(` ${student}`);
          } else if (field === 'SWE') {
            sweMajor.students.push(` ${student}`);
          }
        }
      }

      fields[0].students[0] = fields[0].students[0].trim();
      fields[1].students[0] = fields[1].students[0].trim();

      return fields;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
