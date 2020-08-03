// // # Task 1
// const cekHarikerja = (day) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
//             let cek = dataDay.find((item) => {
//                 return item === day
//             })
//             if(cek) {
//                 resolve(cek)
//             } else {
//                 reject(new error("Hari ini bukan hari kerja"))
//             }
//         },3000)
//     })
// }
// cekHarikerja("Selasa")
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// // # Task 2
async function cekHarikerja (day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek);
            } else {
                reject(new error("Hari ini bukan hari kerja"));
            }
            try {
                console.log(cek)
            } catch(error) {
                console.log(error)
            }
        },3000)
    })
}
cekHarikerja("Minggu")



























// =========== New

// const cekHarikerja = (day) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
//             let cek = dataDay.find((item) => {
//                 return item === day
//             })
//             if(cek) {
//                 resolve(cek)
//             } else {
//                 reject(new error("Hari ini bukan hari kerja"))
//             }
//         },3000)
//     })
// }
// async function fungsi1(day) {
//     let additionalData = 0;
//     try {
//         additionalData = await cekHarikerja;
//         console.log(additionalData)
//     } catch(error) {
//         console.log(error)
//     }
// }
// cekHarikerja("Senin",fungsi1)


//=====

// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 1000);
//     setTimeout(() => {
//         reject(new Error("Data Rejected"));
//     }, 2000);
// })
// async function sum(a, b) {
//     let additionalData = 0
//     try {
//         additionalData = await data;
//         console.log(additionalData)
//     } catch(error) {
//         console.log(error)
//     }
// }
// sum(10,11);