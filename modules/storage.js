export const Storage = (tasks) => {
  localStorage.setItem('to-do-list', JSON.stringify(tasks));
};

export const getStorage = () => {
  const lists = localStorage.getItem('to-do-list') ? JSON.parse(localStorage.getItem('to-do-list')) : [];
  return lists;
};

export const editTask = (text, tasks, list) => {
  const taskIndex = list.index;
  const editTask = tasks[taskIndex - 1];

  editTask.description = text.textContent;
  Storage(tasks);
  return editTask;
};