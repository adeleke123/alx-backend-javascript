// Define an interface for Student that accepts four properties
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

// Create two objects that conform to the Student interface
const [s1, s2] = [
  {
    firstName: "Chris",
    lastName: "Dakolo"
    age: 30,
    location: "Kano State"
  },
  {
    firstName: "Rita",
    lastName: "Iwu",
    age: 24,
    location: "Edo State"
  },
]

// Add the objects to an array of Students
const studentsList : Array<Student> = [s1, s2];

// Get the body element from the DOM
const body : HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create a new table element
const table : HTMLTableElement = document.createElement("table");

// Create a new header section for the table
const headerSection : HTMLTableSectionElement = document.createElement("headerSection");

// Create a new body section for the table
const bodyRows : HTMLTableSectionElement = document.createElement("bodyRows");

// Create a new row for the table header
const headerRow : HTMLTableRowElement = headerSection.insertRow(0);

// Create two cells for the header row
const firstCellHead : HTMLTableCellElement = headerRow.insertCell(0);
const secondCellHead : HTMLTableCellElement = headerRow.insertCell(1);

// Set the innerHTML for each cell in the header row
firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";

// Add the header section to the table
table.append(headerSection);

// Loop through each student in the studentsList array
studentsList.forEach((student => {
  // Create a new row for the student data
  const row : HTMLTableRowElement = bodyRows.insertRow(0);

  // Create two cells for the student data row
  const firstCell : HTMLTableCellElement = row.insertCell(0);
  const secondCell : HTMLTableCellElement = row.insertCell(1);

  // Set the innerHTML for each cell in the student data row
  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});

// Add the bodyRows section to the table
table.append(bodyRows);

// Append the table to the body of the document
table.append(table);

