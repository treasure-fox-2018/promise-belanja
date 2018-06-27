function beli(uang, obj){
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(() => {
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        resolve({
          message: `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`,
          kembalian: kembalian
        })
      } else {
        reject({
          message: `uang gk cukup nih buat beli ${obj.item}, uangnya kurang ${obj.harga - uang}`,
          uang: uang
        })
      }
    }, obj.waktu)
  })
}

module.exports = beli;
