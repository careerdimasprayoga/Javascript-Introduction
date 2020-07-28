let fungsi1 = (kkunci, limit, BackCall) => {
    let nama = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    let cari = nama.filter(word => word.match(kkunci)).slice(0,limit)
    BackCall(cari)
}

let fungsi2 = (tampil) => {
    console.log(tampil)
}
fungsi1("o", 3, fungsi2)

















// function fungsi1 (param1, panggilKembali) {
//     let variable1 = `Halo ${param1}`;
//     panggilKembali(variable1);
// }
// function fungsi2 (tampil) {
//     console.log(tampil)
// }
// fungsi1("Dimas", fungsi2);