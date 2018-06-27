function beli(uang, food){
  return new Promise(function(resolve, reject) {
    
    console.log(`Saya pergi membeli ${food.item}`)
    setTimeout(function(){
      
      var kembalian = uang - food.harga
      
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${food.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      } else {
        reject(`uang ga cukup nih buat beli ${food.item} harganya ${food.harga}`);
      }
    }, food.waktu);
  })
  
}

module.exports = beli;