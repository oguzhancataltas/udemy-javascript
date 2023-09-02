// Scope Kavramı

// Global Scope Kavramı

function a() {

    // Function Scope Kavramı

    if (true) {

        // Block Scope Kavramı

    }
}

var veri1 = 5;  // Global Scope

let veri2 = 10;

const veri3 = 15;

// function fonksiyon () {
//     var veri1 = 30; // Function Scope
//     let veri2 = 40; // function > global 
//     const veri3 = 50;   // global scope göre function scope'un önceliği vardır.

//     console.log(veri1, veri2, veri3);

// }

// fonksiyon();

// console.log(veri1, veri2, veri3);

if(true) {
    var a = 10; // var kullanırsak block dışında da geçerliliği devam ediyor.
    let b = 20; // Sadece block içerisinde geçerliliği devam eder
    const c = 30; // Sadece block içerisinde geçerliliği devam eder

    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;

    console.log(veri1, veri2, veri3);
}

console.log(veri1, veri2, veri3);

// console.log(a);
// console.log(b);
// console.log(c);


