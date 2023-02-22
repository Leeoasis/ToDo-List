export default class UI {
    // UI Class: Displays listed Books
      static displayTask() {
        const task = Storage.getTask();
        task.forEach((list) => UI.addTaskToList(list));
    }
  

// Selector
static addTaskToList(list) {
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
}

    // Event: Deletes a Book
    static deleteTask(el) {
        if (el.classList.contains('delete')) {
          el.parentElement.remove();
        }
      }
    
      // Event: Clears data
      static clearFields() {
        document.querySelector('#task').value = '';
      }
  
}
