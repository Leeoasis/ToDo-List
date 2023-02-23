import { Storage, getStorage } from './storage.js';
import { populateList } from './populate.js';

const addNewTask = (input) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };
  if (input.value === '') {
    input.preventDefault();
  }
  taskList.push(task);

  Storage(taskList);
  input.value = '';
  populateList(taskList);
  return task;
};

export default addNewTask;