const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // Throw an error if the database is not available
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = data.split('\n');

        // Initialize objects for each field
        const csField = {
          name: 'CS',
          list: [],
        };

        const sweField = {
          name: 'SWE',
          list: [],
        };

        const fields = [csField, sweField];

        // Iterate over the records and populate the field lists
        for (const record of records) {
          if (record.trim() !== '') {
            const [student, , , field] = record.split(',');

            // Check the field & add the student to the corresponding list
            if (field === 'CS') {
              csField.list.push(` ${student}`);
            } else if (field === 'SWE') {
              sweField.list.push(` ${student}`);
            }
          }
        }

        // Trim the first element of each list
        fields[0].list[0] = fields[0].list[0].trim();
        fields[1].list[0] = fields[1].list[0].trim();

        // Display the number of students and the lists for each field
        console.log(`Number of students: ${fields[0].list.length + fields[1].list.length}`);
        console.log(`Number of students in ${fields[0].name}: ${fields[0].list.length}. List: ${fields[0].list}`);
        console.log(`Number of students in ${fields[1].name}: ${fields[1].list.length}. List: ${fields[1].list}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
