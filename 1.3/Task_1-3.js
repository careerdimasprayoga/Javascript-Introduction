const pengguna = () => {
    return new Promise((resolve, reject) => {
      const dataPengguna = fetch('https://jsonplaceholder.typicode.com/users')
      if(dataPengguna) {
          resolve(dataPengguna)
      } else {
          reject(new error("Datanya Error"))
      }
    })
}
pengguna()
.then(respon => respon.json())
.then(data =>
  data.forEach(function (item) {
    console.log(item["name"])
  })
)
.catch((error) => {
    console.log(error);
});
// Playcode.io