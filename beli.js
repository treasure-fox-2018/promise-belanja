
function beli(uang, obj) {
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`);
    setTimeout(() => {
      let kembalian = uang - obj.harga;
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      } else {
        reject(`uang gk cukup nih buat beli ${obj.item} uangnya cuma ${uang}`, obj.waktu);
      }
    }, obj.waktu);
  });
}

module.exports = beli;
