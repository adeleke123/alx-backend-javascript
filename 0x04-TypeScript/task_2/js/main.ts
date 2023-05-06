// Define interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

// Implement the interfaces with Director and Teacher classes
export class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home";
  getCoffeeBreak = (): string => "Getting a coffee break";
  workDirectorTasks = (): string => "Getting to director tasks";
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";
  getCoffeeBreak = (): string => "Cannot have a break";
  workTeacherTasks = (): string => "Getting to work";
}

// Create an employee based on salary provided
export const createEmployee = (salary: number | string): Teacher | Director =>
  Number(salary) < 500 ? new Teacher() : new Director();

// Check if employee is a director
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

// Execute the respective work task
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let results = undefined;
  (isDirector(employee)) ? results = employee.workDirectorTasks() : results = employee.workTeacherTasks();
  return results;
}

// Define custom type for class subjects
type Subjects = "Math" | "History";

// Teach a class based on the subject provided
export function teachClass(todayClass: Subjects): string | boolean {
  return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}
