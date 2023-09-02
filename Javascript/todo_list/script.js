// ToDo Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

let todos;

// load items
loadItems();

eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    //delete an item
    taskList.addEventListener("click", deleteItem);
    // delete all item
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    });
}

// get items from local storage
function getItemsFromLS() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

// set item to local storage
function setItemToLS(newTodo) {
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {

    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));

    // a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // a'yı li liste elemanına ekleme işlemi

    li.appendChild(a);

    // li'yi ul listesine ekleme işlemi

    taskList.appendChild(li);

}

// Form'a Eleman Ekleme
function addNewItem(e) {
    if (input.value === "") {
        alert("Value cannot be Null !!!");
    } else {
        createItem(input.value);
        setItemToLS(input.value);

        input.value = "";
    }
    // console.log("Submit");

    e.preventDefault();
}

// Form'da Eleman silme
function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("Are you sure you want to delete ?")) {
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }

    }

    e.preventDefault();

}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getItemsFromLS();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Form'u temizleme
function deleteAllItems(e) {

    if (e.target.id === "btnDeleteAll") {
        if (confirm("Are you sure you want to all delete ?")) {
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
            localStorage.clear();
        }

    }
    e.preventDefault();
}



