function beli(uang, obj) {
  console.log(`Saya pergi membeli ${obj.item}`)
  return promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        resolve(kembalian)
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      } else {
        reject(0)
        console.log(`uang gk cukup nih buat beli ${obj.item} uangnya kurang ${kembalian}`);
      }
    }, obj.waktu);
  });
}
module.exports = beli;
