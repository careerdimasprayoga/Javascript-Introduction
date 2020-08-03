/*
    Objective :
    
    - Asynchorunous
    - Promise
    - Callback Asyncronus
    - Async Await
    - Try Catch
*/

/* 
    Asynchronous :
    Javascript secara default mengekusi perintah secara (Syncronous) KECUALI
    ajax, websocket, worker, file, database, animasi dll.

    Tapi secara praktek untuk console.log() dan pengamatan saya
    js itu Syncrhonous
    -> Blocking dan non Blocking
    - Asynchronous
        Tidak berdasarkan line kode, Tapi dari seberapa lama proses nya. Siapa cepat dia duluan
    - Synchronous
        Memproses line 1 - selanjutnya

    Dalam kasus apa teknik asynchronous digunakan ?
    -> Teknik Asynchronous paling banyak digunakan mengelola komunikasi yang tidak mungkin 
    sinkron atau harus menunggu seperti proses request ajax, operasi file, koneksi ke database,
     websocket, real time communication seperti pada aplikasi chating dan masih banyak lagi.
*/

/* 
    Promise :

    - State di promise
        State = {
            Pending : "Keadaan awal, Tidka terpenuhi/ditolak", 
            Fulfilled : "Oprasi Selesai & Success", 
            Rejected : "Gagal/ditolak"
        }
    - Menghandle Resolve() & Reject()
        Bisa menggunakan .then() & .catch(x)
        resolve()   -> promise object / Fullfilled
        reject()    -> promise object / Rejected
        .then(result)   -> Promise Intance
        .catch(error)   -> Promise Intance
*/

/*
    Callback Asynchrous :
    Menghandle return value dari oprasi Asyncrhous

*/

/*
    Async/Await :
    
    Fitur yang Menangani asyncronus await. Gamau prosesnya dulu duluan

    - Async -> mengubah function jadi Asyncronus
    - Await -> menunda eksekusi hingga proses asynchronus selesai 
        -> setelah satu function selesai. lanjut proses selanjutnya/function selanjutnya
*/ 

/* 
    Try Catch and finnaly :

    - Try
        kode js yang mukin terjadi error
    - Catch
        Menangkap error dari (Try) jika terjadi
    - Finally 
        error/tidak akan berakhir disini
*/

 
/* ======================== Live Coding ======================== */

// # Asynchronous
// Di praktek ini diketahui bahwa javascript itu adalah asyncronous->siapa cepat dia dapat
// setTimeout(() => {
//     console.log("Hello World after 2000 ms")
// }, 2000)
// console.log("Hello World")


// # Promise
// - Promise Object => Didalam Promise
// let janjian = new Promise((resolve, reject) => {
//     let success = true
//     let data = ["Badminton","Wibu"]
//     if(success) {
//         resolve(data)
//     } else {
//         reject(new Error("Janjian Dibatalkan"))
//     }
// })
// console.log(janjian)
// // - Promise Intance
// //  .Then & .Catch => Diluar Promise
// janjian
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// #
