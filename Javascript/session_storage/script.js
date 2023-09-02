// Tarayıcı Depolama Alanları


// Session Storage

// Browser kapatılana kadar bellekte tutulur.

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// const addKey = document.querySelector("#addkey");
// const addValue = document.querySelector("#addvalue");
// const deleteKey = document.querySelector("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItem);

// function addItem(e) {
//     sessionStorage.setItem(addKey.value, addValue.value);
// };

// function deleteItem(e) {
//     sessionStorage.removeItem(deleteKey.value);
// };

// function clearItem(e) {
//     sessionStorage.clear();
// }


// Local Storage

// Kalıcı olarak bellekte tutulur.

// setItem

// localStorage.setItem("programlama", "javascript");
// localStorage.setItem("bilgisayar", "7000");

// getItem

// const value = localStorage.getItem("programlama");
// const value = localStorage.getItem("bilgisayar");

// console.log(value);
// console.log(typeof value);

// clear

// localStorage.clear();

// console.log(localStorage.getItem("klavye"));

if (localStorage.getItem("bilgisayar") == null) {
    console.log("Sorgulanan veri bulunamadı!!!");
} else {
    console.log("Sorgulanan Veri Bulundu.")
}


