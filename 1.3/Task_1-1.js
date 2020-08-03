// // # Task 1
const cekHarikerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new error("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}
cekHarikerja("Selasa")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


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