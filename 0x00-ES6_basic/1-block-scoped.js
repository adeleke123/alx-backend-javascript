export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let taskBlockTask = true;
    const taskBlockTask2 = false;
    task = taskBlockTask;
    task2 = taskBlockTask2;
  }

  return [task, task2];
}
