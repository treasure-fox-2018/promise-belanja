let beli =  (uang, obj) => {
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} uangnya ${kembalian}`);
        reject(0)
      }
    }, 3000)
  })
}

module.exports = beli;