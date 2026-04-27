const input = document.getElementById("input");
const Add_btn = document.getElementById("add-btn");
const input_priority = document.getElementById("input-priority");
const todoCollection = document.getElementById("task_manager");
const Update_TodoButton = document.getElementById("update-btn");
let isUpdate = false;
let value_list = [{
    title: "Gym 💪🏾",
    priority: "High",
    iscompelated: true
}]

let index = 0;


const Handle_input = () => {
    value_list.push({
        title: input.value,
        priority: input_priority.value,
        iscompelated: false
    })
    localStorage.setItem("todos", JSON.stringify(value_list));
    input.value = "";
    input_priority.value = "Defult";
    displaytodo();
};

const displaytodo = () => {   
    todoCollection.innerHTML = "";
    value_list.map((todo, i) => {    
        const div = document.createElement("div");
        div.innerHTML = `<div class ="">
        <div onclick = "CompleteTodoButton(${i})" class="form-check form-check-inline ms-2 fs-5 d-flex align-items-center mb-2">
              <div class="shadow p-2  d-flex">
              <input ${(todo.iscompelated) ? "checked" : ""} class="form-check-input shadow-sm border ${todo.priority == 'High' ? 'border-danger' : (todo.priority == 'Medium') ? 'border-success' : 'border-warning'}"   type="checkbox" id="inlineCheckbox1" value="option1">
              ${(todo.iscompelated) ? `<del><span class="ms-2">${todo.title}</span></del>` : `<span class="ms-2">${todo.title}</span>`}
              <i onclick = "RemoveTodo(${i})"  class="ri-delete-back-2-line ms-2 d-flex mt-1"></i>
              <i onclick = "ShowUpdateTodo(${i})" class="ri-pencil-line ms-2 d-flex mt-1"></i>
              </div>
            </div>
            </div>`;
        todoCollection.appendChild(div);
    })
}
const RemoveTodo = (i) => {
    value_list.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(value_list));
    displaytodo();
}
const CompleteTodoButton = (i) => {
    if (value_list[i].iscompelated) {
        value_list[i].iscompelated = false;
    } else {
        value_list[i].iscompelated = true;
    }
    localStorage.setItem("todos", JSON.stringify(value_list));
    displaytodo();
}
const ShowUpdateTodo = (i) => {
    console.log(value_list[i].title);
    index = i;
    input.value = value_list[i].title;
    input_priority.value = value_list[i].priority;
    Add_btn.textContent = "update Todo";
    Add_btn.classList = "d-none";
    Update_TodoButton.className = "btn btn-primary";
}
const HandleUpdateTodo = () => {
    value_list[index].title = input.value;
    value_list[index].priority = input_priority.value;
    value_list[index].iscompelated = false;
    localStorage.setItem("todos", JSON.stringify(value_list));
    input.value = "";
    input_priority.textContent = "Defult"
    Update_TodoButton.classList = "d-none";
    Add_btn.className = "btn btn-primary";
    displaytodo();
}
const DisplayButton = () => {
    if (isUpdate) {
    } else {
        Update_TodoButton.classList = "d-none"
    }
}
Add_btn.addEventListener("click", Handle_input);
Update_TodoButton.addEventListener("click", HandleUpdateTodo);
DisplayButton();
displaytodo();
