if('ibu' == 'ibu') {
    console.log("Palindrom")
} else {
    console.log("Non Palindrom")
}

const phone = "Nokia" // Tidak bisa pakai oprator pembading ( >= != <>=)
switch (phone) {
    case "Nokia" : {
        console.log("Hp anda Nokia")
        break;
    }
    case "Iphone" : {
        console.log("Hp anda I Phone")
        break;
    }
    default : {
        console.log("Hp anda tidak diketahui")
    }
}


// Ternary Operator
let harga = 3000
harga > 5000 ? console.log("Mahal") : console.log("Murah") // If else

harga > 5000 ? console.log("Mahal") : harga > 2000 ? console.log("Sedang") : console.log("Murah") // If else elseif


// Short Circuit