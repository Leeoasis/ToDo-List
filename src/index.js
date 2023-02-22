import './style.css';
import { populateList } from '../modules/populate.js';
import addNewTask from '../modules/add.js';

const addNewTaskInput = document.querySelector('#text');
const addTaskBtn = document.querySelector('.addbtn');
const removeCompletedTask = document.querySelector('.delete-btn');

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

removeCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  populateList();
});

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  populateList();
});