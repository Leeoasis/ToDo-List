import './style.css';

const list = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: true,
  },
  {
    index: 1,
    description: 'play a game',
    completed: true,
  },
  {
    index: 2,
    description: 'complete To Do list project',
    completed: true,
  },
  {
    index: 3,
    description: 'cook dinner',
    completed: true,
  },
];

const toDo = document.querySelector('.to-do-list');

list.forEach((list) => {
  toDo.innerHTML += `
   <li>
       <input type="checkbox">
       <span>${list.description}</span>
       <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>    
  <hr>              
  `;
});