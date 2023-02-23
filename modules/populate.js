import check from './check.js';
import { Storage, getStorage, editTask } from './storage.js';
import trashTask from './remove.js';

export const populateList = () => {
  const listContainer = document.querySelector('.to-do-list');

  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  const tasks = getStorage();

  if (tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      const lists = document.createElement('li');
      lists.classList.add('list');
      lists.id = tasks[i].index;
      lists.draggable = true;

      const list1Child = document.createElement('div');
      list1Child.classList.add('div');

      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';

      if (tasks[i].completed) {
        input.checked = true;
      }

      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = tasks[i].description;
      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';
      label.style.color = '#000';

      const trash = document.createElement('span');
      trash.classList.add('bin');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'flex';
      trash.style.cursor = 'pointer';
      trash.id = tasks.indexOf(tasks[i]);

      lists.appendChild(list1Child);
      list1Child.appendChild(input);
      list1Child.appendChild(label);
      list1Child.appendChild(trash);
      listContainer.appendChild(lists);

      label.addEventListener('focus', () => {
        trash.style.display = 'none';
        trash.style.color = '#fff';
        trash.style.cursor = 'pointer';
        label.style.outline = 'none';
      });

      label.addEventListener('blur', (e) => {
        editTask(e.target, tasks, tasks[i]);
        populateList();
      });

      input.addEventListener('change', (e) => {
        check(e.target, tasks[i]);
        Storage(tasks);
      });

      trash.addEventListener('mousedown', (e) => {
        e.preventDefault();
        trashTask(JSON.parse(trash.id));
        populateList();
      });
    }
  }
};

export default populateList;