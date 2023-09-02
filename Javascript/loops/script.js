// // Döngüler (Loops)

// // while loop

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// console.log("");

// while (i > 0) {
//     console.log(i);
//     i--;
// }

// console.log("");

// // break ve continue

// while (i < 10) {
//     console.log(i);
//     if(i == 6) {
//         break;
//     }
//     i++;
// }

// console.log("");

// i = 0;

// while (i < 10) {
//     i++;
//     if(i == 3) {
//         console.log("");
//         continue;
//     }
//     console.log(i);
// }

// console.log("");

// // do while loop

// i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i < 10);

// console.log("");

// // for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("");

// for (let i = 0; i < 10; i++) {
//     if(i == 3) {
//         console.log("");
//         continue; //break;
//     }
//     console.log(i);
// }

// console.log("");

// let total = 0;

// for(let i = 1; i <= 10; i++ ) {
//     total += i;
//     if(i == 10){
//         console.log("Sonuç : " + total);
//     }
// }

// console.log("");

// let result = 1;

// for(let i = 1; i <= 10; i++ ) {
//     result *= i;
// }
// console.log("Sonuç : " + result);

// Dizi ve Objelerde Döngü Kullanımı

let citys = ["İstanbul", "Ankara", "İzmir", "Eskişehir", "Elazığ"];
let users = [

    {firstName:"Oğuzhan", lastName:"Çataltaş"},
    {firstName:"Levent", lastName:"Ertunalılar"},
    {firstName:"Tolga", lastName:"Mertoğlu"},
    {firstName:"Selin", lastName:"Şahin"},
    
]

// Arrays

for (let i = 0; i < citys.length; i++) {
    console.log(citys[i]);
}

console.log("");

// for-in metod

for (let i in citys) {
    console.log(`index : ${i} \nvalue : ${citys[i]}` );
}

console.log("");


// for-each metod

citys.forEach(function(item) {
    console.log(item);
});

console.log("");

// Objects

// for

for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstName);
    console.log(users[i].lastName);
    console.log("");
}

console.log("");

// for-in metod

for (let i in users) {
    console.log(`index : ${i}\nAd : ${users[i].firstName}\nSoyad : ${users[i].lastName}`);
}

// map : returns an array

let veri = users.map(function(item){
    return item.firstName + " " + item.lastName;
});

console.log("");

veri.forEach(function(item) {
    console.log(item);
});

console.log("");

let numbers = [1,3,5,7,11,13];

let num = numbers.map(function(n) {
    return n*n;
});

for (let i in num) {
    console.log(`index : ${i} \nvalue : ${num[i]}` );
}