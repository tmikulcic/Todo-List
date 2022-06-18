const { remove } = require('lodash');

// Element declaration**
let taskList = [];
let button = document.querySelector('.add-button');
button.addEventListener('click', addTask);

// Constructor function**
function Task(task) {
  this.task = task;
}

// Adding task to an array**
function addTask() {
  let task = document.querySelector('#text').value;
  let newTask = new Task(task);

  console.log(newTask);
  taskList.push(newTask);
  console.table(taskList);

  // Card creation**
  const contentDiv = document.querySelector('#card-container');

  const cardTask = document.createElement('p');
  cardTask.textContent = `${task}`;
  cardTask.classList.add('card-task');

  const cardCheckbox = document.createElement('input');
  cardCheckbox.type = 'checkbox';
  cardCheckbox.classList.add('checkbox');

  const removeCard = document.createElement('button');
  removeCard.textContent = 'Remove';
  removeCard.classList.add('rmv-btn');
  removeCard.addEventListener('click', (e) => {
    removeCard.parentElement.remove();
  });

  const card = document.createElement('div');
  card.classList.add('card');
  contentDiv.appendChild(card);
  card.append(cardTask, cardCheckbox, removeCard);
}
