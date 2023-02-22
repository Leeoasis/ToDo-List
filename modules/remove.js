import { Storage, getStorage } from './storage.js';

const trashTask = (taskIndex) => {
  const storedTasks = getStorage();

  const currentTasks = storedTasks.filter(
    (index) => storedTasks.indexOf(index) !== taskIndex,
  );

  for (let i = 0; i < currentTasks.length; i += 1) {
    currentTasks[i].index = currentTasks.indexOf(currentTasks[i]) + 1;
  }

  Storage(currentTasks);
};

export default trashTask;