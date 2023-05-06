// Define Teacher interface with properties and index signature.
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  [extraProperty: string]: any
}

// Define Directors interface that extends Teacher and adds a property.
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define interface for function that takes in names and returns a string.
interface printTeacherFunction {
  (firstName: string, lastName: string ): string;
}

// Implement printTeacherFunction interface as a constant variable.
const printTeacher: printTeacherFunction = (firstName: string, lastName: string ): string => `${firstName.charAt(0)}. ${lastName}`;

// Define interface for class with two methods.
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement classInterface as a class with constructor and methods.
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}
