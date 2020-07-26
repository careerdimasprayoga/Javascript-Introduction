let data = {
    id: 1,
    name: "Leanner Graham",
    username: "Bret",
    email: "Graham@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Grewbrgough",
        zipcode: "220-120"
    },
    phone: "250-120",
    website: "hillir.gp"
}
// A Ubah data Spread Operator
let editData = { 
    ...data, 
    name: "Dimas Prayoga",
    email: "dimasprayogatohagasayaga@gmail.com",
    hobby: "Watching Anime"
 }
// console.log(editData)
// B Get data desctructing
let { address:{street} } = data
console.log(street)