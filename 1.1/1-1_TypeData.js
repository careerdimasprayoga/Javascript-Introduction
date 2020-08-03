let name = "Dimas Prayoga"
let age = 20
let hobbies = [
    "Badminton",
    "Watch Anime"
    ]
let IsMaried = false
let SchoolList = [
    {
        name: "SDN Rabak 01 Parung Panjang",
        yearIn: "2005",
        yearOut: "2012",
        major: null
    },{
        name: "MTS Al-Makmur",
        yearIn: "2012",
        yearOut: "2015",
        major: null
    },{
        name: "SMK Bina Putra Mandiri",
        yearIn: "2015",
        yearOut: "2018",
        major: "Rekayasa Perangkat Lunak"
    }
    
]
let skills = [
    {
        skillname: "HTML 5",
        level: "advanced"
    },{
        skillname: "CSS 3",
        level: "advanced"
    },{
        skillname: "PHP",
        level: "advanced"
    },{
        skillname: "Javascript",
        level: "beginner"
    },{
        skillname: "Framework Codeigniter",
        level: "expert"
    },{
        skillname: "Framework Laravel",
        level: "advanced"
    },{
        skillname: "Framework Bootstrap",
        level: "advanced"
    },{
        skillname: "Mysql",
        level: "advanced"
    },{
        skillname: "Oracle",
        level: "advanced"
    }
]
let interestInCoding = true

console.log(skills[0]["skillname"]) 
// console.log(skills)

// var fruits = ["Apple", "Banana"];
skills.forEach(function (item, index, array) {
    console.log(item["skillname"]);
});