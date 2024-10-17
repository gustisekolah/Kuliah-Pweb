const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan task baru
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = taskText;
  inputField.setAttribute('readonly', true);

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash', 'trash-icon');
  deleteIcon.onclick = () => todoList.removeChild(listItem);

  inputField.addEventListener('dblclick', () => {
    inputField.removeAttribute('readonly');
    inputField.focus();
  });

  inputField.addEventListener('blur', () => {
    inputField.setAttribute('readonly', true);
  });

  listItem.appendChild(inputField);
  listItem.appendChild(deleteIcon);
  todoList.appendChild(listItem);

  todoInput.value = '';
}