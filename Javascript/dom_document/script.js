// Elementlerin Seçilmesi

// Tek Element Seçimi
//  document.getElementById()
//  document.querySelector()

// document.getElementById() metodu

// let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;
// veri = document.getElementById("header");

// veri = veri.id;
// veri = veri.className;

// veri.style.color = "blue";
// veri.style.fontSize = "50px";
// veri.style.fontSize = "50px";
// veri.style.display = "none";

// document.getElementById("header").innerText = "Yapılacaklar";
// document.getElementById("header").innerHTML = "<b> ToDo List </b>";


// console.log(veri);

// document.querySelector() metodu

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(2)").style.color = "purple";

// document.querySelector("li").className = "list-group-item list-group-item-primary";
// document.querySelector("li").classList.add("active");

// Çoklu Element Seçimi
// document.getElementByClassName()

// let veri;

// veri = document.getElementsByClassName("list-group-item");
// veri = document.getElementsByClassName("list-group-item")[0];
// veri = document.getElementsByClassName("list-group-item")[2];

// veri = veri[2];

// veri[1].style.fontSize = "30px";
// veri[1].style.color = "red";
// veri[2].textContent = "new item";

// for (let i = 0; i < veri.length; i++) {
//     console.log(veri[i].style.color = "purple");
//     console.log(veri[i].textContent = "new item");
// }

// document.getElementsByTagName()

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");
// veri = document.getElementById("task-list").getElementsByTagName("a");

// document.querySelectorAll()

// veri = document.querySelectorAll("li");

// veri.forEach(function(item, index){
//     item.textContent = `${index} - item`;
// });

// console.log(veri);

// Elementler Üzerinde Gezinme

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2");
// const card = document.querySelector(".card");

// value = todoList;
// value = todo;
// value = card;

// // Child Nodes

// value = todoList.childNodes;
// value = todoList.children;
// value = todoList.children[1];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[2].textContent = "Değişen Madde";

// value = card;
// value = card.children;
// value = card.children[1].children[0].textContent = "Merhaba";

// value = todoList;
// // value = todoList.children[0];
// // value = todoList.firstElementChild;
// // value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount;

// value = card;
// value = card.parentElement;
// value = card.parentElement.parentElement;

// value = todo;
// value = todo.previousElementSibling;
// value = todo.previousElementSibling.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// console.log(value);


// Element Oluşturma

// const li = document.createElement("li");

// // add class & id

// li.className = "list-group-item list-group-item-secondary";
// // li.id = "list";

// // attribute

// li.setAttribute("title", "new item");
// li.setAttribute("data-id", "5");

// const text = document.createTextNode("new item");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></i>';

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);


// console.log(li);

// Element Silme

// const taskList = document.querySelector("#task-list");

//taskList.remove();

// taskList.childNodes[5].remove();
// taskList.children[4].remove();
// taskList.removeChild(taskList.children[2]);

// Attribute

// taskList.children[1].removeAttribute("class");

// for(let i = 0; i < taskList.children.length; i++) {
//     taskList.children[i].removeAttribute("class");
//     taskList.children[i].removeAttribute("id");
// }

// Element Güncelleme

// const cardHeader = document.querySelector(".card-header");

// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("Yeni Listeler"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// // Class'larda Güncelleme

// const taskList = document.querySelector("#task-list");
// let value;

// link = taskList.children[0].children[0];

// value = link.className;
// value = link.classList;
// // value = link.classList[0]; 
// // value = link.classList[1]; 

// link.classList.add("new");
// link.classList.remove("new");

// // Attribute Güncelleme

// value = link.getAttribute("href");
// value = link.setAttribute("href", "https://google.com");

// value = link.hasAttribute("href");


// console.log(value);


// *** Event Listener ve Event Objesi ***

// const btn = document.querySelector("#btnDeleteAll");
// const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click", function(){
//     console.log("Butona Tıklandı.");
// });

// btn.addEventListener("click", btnClick);
// btn2.addEventListener("click", btnClick);

// function btnClick(){
//     console.log("Butona Tıklandı!");
// };

// btn.addEventListener("click", function(a){
//     let value;

//     value = a;
//     value = a.target;
//     value = a.target.id;
//     value = a.target.classList;
//     value = a.type;
    
//     a.preventDefault();

//     console.log(value);
// });

// ** Mouse Eventleri **

// const btn = document.querySelector("#btnAddNewTask");
// const ul = document.querySelector("#task-list");

// click

// btn.addEventListener("click", run);
// ul.addEventListener("click", run);

// double click

// btn.addEventListener("dblclick", run);

// mouse down

// btn.addEventListener("mousedown", run);

// mouse up

// btn.addEventListener("mouseup", run);

// mouse enter

// ul.addEventListener("mouseenter", run);

// mouse leave

// ul.addEventListener("mouseleave", run);

// mouse over

// ul.addEventListener("mouseover", run);

// mouse out

// ul.addEventListener("mouseout", run);

// mouse move

// ul.addEventListener("mousemove", run);

// function run(event){
//     console.log(`event type : ${event.type}`);
// }

// ** Keyboard Evenleri **

// const text = document.getElementById("txtTaskName");

// Focus

// text.addEventListener("focus", run);

// Blur

// text.addEventListener("blur", run);

// Paste
// text.addEventListener("paste", run);
// Copy
// text.addEventListener("copy", run);
// Cut
// text.addEventListener("cut", run);
// Select
// text.addEventListener("select", run);

// KeyDown
// text.addEventListener("keydown", run);
// KeyUp
// text.addEventListener("keyup", run);


// function run(e) {
//     console.log(e.type);
//     console.log(e.target.value);
// };


// *** Event Bubbling

// const form = document.querySelector("form");
// const card = document.querySelector(".card");
// const cardBody = document.querySelector(".card-body");
// const container = document.querySelector(".container");

// form.addEventListener("click", function(e){
//     console.log("Form");
//     e.stopPropagation();
// });

// card.addEventListener("click", function(e){
//     console.log("Card");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click", function(e){
//     console.log("Card Body");
//     e.stopPropagation();
// });

// container.addEventListener("click", function(e){
//     console.log("Container");
//     e.stopPropagation();
// });

// *** Event Capturing ***

// form.addEventListener("click", function(e){
//     console.log("Form");
//     e.stopPropagation();
// }, true);

// card.addEventListener("click", function(e){
//     console.log("Card");
//     e.stopPropagation();
// }, true);

// cardBody.addEventListener("click", function(e){
//     console.log("Card Body");
//     e.stopPropagation();
// }, true);

// container.addEventListener("click", function(e){
//     console.log("Container");
//     e.stopPropagation();
// }, true);

// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click", function(e) {
//         console.log(e.target);
//     });
// });

// const ul = document.querySelector("ul");

// ul.addEventListener("click", function(e) {
//     if (e.target.className === "fas fa-times") {
//         e.target.parentElement.parentElement.remove();
//     }
// });

