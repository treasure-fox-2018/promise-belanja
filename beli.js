function beli(uang, obj, cb) {
  console.log(`Saya pergi membeli ${obj.item}`);
  return new Promise((result, reject) => {
    setTimeout(function() {
      let kembalian = uang - obj.harga;
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        result(kembalian);
      }else {
        kembalian += obj.harga;
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(kembalian);
      }
    }, obj.waktu);
  });
}

module.exports = beli;
