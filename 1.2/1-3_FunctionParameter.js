let fungsi = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal  !")
    } else {
        if(dataArray.length < 5) {
            console.log("Data array harus lebih dari 5")
        } else {
            // let cari = dataArray.find(element => element > nilaiAwal)
            let cari = dataArray.filter(item => item >= nilaiAwal && item <= nilaiAkhir).sort();
            console.log(cari)
        }
    }
}
fungsi(10, 24, [5,10,23,15,20,25,30])