let janjian = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Berhasil");
    } else {
        reject(new Error("Janjian dibatalkan"))
    }
})

janjian
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    })