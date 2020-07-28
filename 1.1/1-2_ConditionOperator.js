function nilai(ind,eng,mtk,ipa) {
  if(!ind || !eng || !mtk || !ipa) {
    console.log("Semua nilai pelajaran harus diisi !")
  } else {
    let rata = ind + eng + mtk + ipa / 4
    console.log(rata)
      if(rata >= 90) { 
        console.log("A")
      } else if(rata >= 80) { 
        console.log("B")
      } else if(rata >= 70) { 
        console.log("C")
      } else if(rata >= 60) { 
        console.log("D")
      } else if(rata <= 60) { 
        console.log("E")
      }
  }
}
nilai(20,20,20,10);