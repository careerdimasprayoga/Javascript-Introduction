// SetTimeout(() => {
//     console.log("Tampil setelah 2000MS");
// },2000);
// console.log("Tampil duluan")



// --------------------

// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 2000);
//     setTimeout(() => {
//         reject(new Error("Data Rejected"))
//     }, 2000)
// })
// async function sum(a, b) {
//     let additionalData = 0;
//     additionalData = await data;
//     console.log(additionalData);
//     console.log(a);
//     console.log(b);
// }
// sum(10, 11)

// Else

const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2000);
    setTimeout(() => {
        reject(new Error("Data Rejected"))
    }, 2000)
})
async function sum(a, b) {
    let additionalData = 0;
    try {
        additionalData = await data;
        console.log(additionalData)
    } catch(error) {
        console.log(error)
    }
    
}
sum(10, 11)