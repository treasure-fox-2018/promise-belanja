let beli = require("./beli.js")

//create class barang
class Barang {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

//create objects barang
let permen = new Barang ("permen", 500, 2000);
let roti = new Barang ("roti", 1000, 2000);
let nasi = new Barang ("nasi", 5000, 2000);
let pepsi = new Barang ("es teh", 2000, 2000);
let susu = new Barang ("gorengan", 1500, 2000);

// let listBelanja = [permen, roti, nasi, esTeh, gorengan]

beli(7000, permen).then((kembalian) => {
  return beli(kembalian, roti);
})
.then((kembalian) => {
  return beli(kembalian, nasi);
})
.then((kembalian) => {
  return beli(kembalian, pepsi);
})
.then((kembalian) => {
  return beli(kembalian, susu);
})
.catch((error) => {
  console.log(error);
});