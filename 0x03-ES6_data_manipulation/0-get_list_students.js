export default function getListStudents() {
  const makeStudents = (id, firstName, location) => ({
    id,
    firstName,
    location,
  });

  return [
    makeStudents(1, 'Guillaume', 'San Francisco'),
    makeStudents(2, 'James', 'Columbia'),
    makeStudents(5, 'Serena', 'San Francisco'),
  ];
}
