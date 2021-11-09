//select the text input and button
const todoInput = document.getElementById("todoInput");
const submitBtn = document.getElementById("submit-btn");

//add event listener to the button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log(todoInput.value);
  const newTodo = todoInput.value;
  //call the addTodo and pass in the todo value
  addTodo(newTodo);
  todoInput.value = "";
});

const todoLists = [];
function addTodo(todo) {
  //push todo to Lists
  todoLists.push({ todo });
  console.log(todoLists);
}
//push the todo into an empty array
