// Macam macam Method / Built in Function

// 1. Concat
// Join array
let fruits1 = ['Aple','Banana','Manggo']
let fruits2 = ['Strawberry','Durian']
let join = fruits1.concat(fruits2)


// 2. Sort
// Mengurutkan
let abjad = ["A","C","B"]
let number = [1,3,2]
let urut = number.sort();


// 3. Every
// Metode ini berfungsi untuk mengecek apakah setiap elemen dalam array memenuhi kondisi.
const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const greaterFive = angka3.every(item => item >= 4);    // Semua item lebih dari 4
console.log(greaterFive);                               // Output: false


// 4. Includes
// Metode ini berfungsi untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak.
const angka4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const something = angka4.includes(2);                   // Mengandung "2"
console.log(something);                                 // Output: true


// 5. Map
// Metode ini berfungsi untuk membuat array baru sambil mengecek/melakukan operasi terhadap setiap elemen array.
const angka5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// membuat array baru dari array angka untuk memeriksa apakah setiap elemennya bernilai habis dibagi 2 atau tidak
const mapedArray = angka5.map(item => item % 2 === 0);
console.log(mapedArray); // output: [false, true, false, true, false, true, false, true, false]


// 6. Foreach
const array = [1, 2, 3, 4, 5]
array.forEach(item => { 
  console.log(item);    // Output: 1 2 3 4 5
});


// 7. ToString
// Mengubah array to string
let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let convert = fruits7.toString()


// 8. Popping
// removes the last element from an array
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let eight = fruits8.pop()
console.log(fruits8)


// 9. Push
// adds a new element to an array (at the end):
var fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.push("Kiwil");


// 10. Shift
var fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.shift();            // Removes the first element "Banana" from fruits
console.log(fruits10)