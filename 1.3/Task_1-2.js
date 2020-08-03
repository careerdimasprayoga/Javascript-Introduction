const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let months = ["January","February","March","April","Mey","Juny","July","August","September","October","November","Desember"];
        if(!error) {
            callback(null, months)
        } else {
            callback(new error("Data tidak ditemukan", []))
        }
    }, 4000)
}

function showMonth(kosong, months) {
    if(kosong == null) {
        let mapping = months.map(datanya => datanya)
        console.log(mapping);
    } else {
        console.log(kosong);
    }
}
getmonth(showMonth)