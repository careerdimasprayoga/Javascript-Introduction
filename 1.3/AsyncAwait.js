// // async function helloWorld() {
// //     let result = await doAsync();
// //     let showResult = await showAsync();
// //     console.log(result)
// // }

// function helloWorld() {
//     let result = doAsync();
//     let showResult = showAsync(result);
// }
// // function doAsync() {
// //     setTimeout(())
// // }




    
// async function helloWorld() {
//   // async mengubah function menjadi syncronus
//   // let result = doAsync();
//   // let showResult = showAsync();
//   let result = await doAsync();
//   let showResult = await showAsync();
// }

// async function helloWorld() {
//   // async mengubah function menjadi syncronus
//   // let result = doAsync();
//   // let showResult = showAsync();
//   var result = await doAsync(); // 2 detik
//   let showResult = await showAsync(result); // 1 detik
// }

// function doAsync() {
//   return "Hai !";
// }

// function showAsync(result) {
//   console.log(result);
// }

// helloWorld();

// ==================================================
const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
  setTimeout(() => {
    reject(new Error("Data Rejected"));
  }, 2000);
});

async function sum(a, b) {
  let additionalData = 0;
  try {
    additionalData = await data;
    // jika proses berhasil maka bisa melanjutkan ke line berikutnya yang ada di dalam try
    let result = a + b + additionalData;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}