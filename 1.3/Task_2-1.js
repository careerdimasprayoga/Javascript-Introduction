let arkfood = (harga, voucher, jarak, pajak) => {

    if(voucher == "ARKAFOOD5") {
        if(harga <= 50000) {
            console.log("Voucher berlaku untuk minimum pembelian Rp.50.000")
        } else {
            // Discount
            let potongan                    = harga * 50 / 100                                                  // Toal potongan harga
            let potongan_max                = 50000
            let total_discount              = potongan >= potongan_max ? harga-potongan_max : harga-potongan
            // Ongkir
            let ongkir1                     = 5000
            let ongkir2                     = 3000
            let total_ongkir                = jarak <= 2 ? ongkir1 : (jarak-2)*ongkir2+ongkir1
            // Pajak
            let total_pajak                 = pajak ? harga*5/100 : 0
            // Sub Total
            let sub_total                   = harga - total_discount + total_ongkir + total_pajak
            // Tampilkan
            console.log(harga)
            console.log(total_discount)
            console.log(total_ongkir)
            console.log(total_pajak)
            console.log(sub_total)
        }
    } else if(voucher == "DITRAKTIRDEMY") {
        if(harga <= 25000) {
            console.log("Voucher berlaku untuk minimum pembelian Rp.50.000")
        } else {
            // Discount
            let potongan                    = harga * 60 / 100                                                  // Toal potongan harga
            let potongan_max                = 30000
            let total_discount              = potongan >= potongan_max ? harga-potongan_max : harga-potongan    // Get harga setelah discount
            // Ongkir
            let ongkir1                     = 5000
            let ongkir2                     = 3000
            let total_ongkir                = jarak <= 2 ? ongkir1 : (jarak-2)*ongkir2+ongkir1
            // Pajak
            let total_pajak                 = pajak ? harga*5/100 : 0
            // Sub Total
            let sub_total                   = harga - total_discount + total_ongkir + total_pajak
            // Tampilkan
            console.log(harga)
            console.log(total_discount)
            console.log(total_ongkir)
            console.log(total_pajak)
            console.log(sub_total)
        }
    } else {
        // Ongkir
        let ongkir1                     = 5000
        let ongkir2                     = 3000
        let total_ongkir                = jarak <= 2 ? ongkir1 : (jarak-2)*ongkir2+ongkir1
        // Pajak
        let total_pajak                 = pajak ? harga*5/100 : 0
        // Sub Total
        let sub_total                   = harga + total_ongkir + total_pajak
        // Tampilkan
        console.log(harga)
        console.log(total_discount)
        console.log(total_ongkir)
        console.log(total_pajak)
        console.log(sub_total)
    }
}
arkfood(75000,"ARKAFOOD5",5,true)

/* 
    Algoritma 
    1. Kondisi/Validasi => Kode voucher
    2. Kondisi/Validasi => Ketentuan harga minimal belanja voucher
    3. Proses           => Mencari total potongan/discount voucher
    4. Proses           => Menentukan total MAXIMAL potongan/discount voucher
    5. Kondisi/Validasi => Jika total potongan/discount kurang dari Rp.50.000 maka akan menghitung normal potongan/discount tersebut.
                           Jika tidak maka total potongan/discount maximal = Rp.50.000
    6. Proses           => Menentukan ongkir Pertama
    7. Proses           => Menentukan Ongkir Selanjutnya
    8. Kondisi/Validasi => Jika jarak kurang dari ketentuan(2km) maka ongkir = 5000 jika tidak
                           Maka Ongkir pertama = 5000 + 3000/km
    9. Kondisi/Validasi => Jika Pajak = True. maka total pajak 5% dari total belanja. Jika tidak maka pajak = Rp. 0
    10. Proses          => Menghitung Sub Total (Harga awal - Total Discount + total_ongkir + total_pajak)
    10. Output          => Menampilkan harga awal, Total potongan/discount, Total Ongkir, Total Pajak, Sub Total
*/
