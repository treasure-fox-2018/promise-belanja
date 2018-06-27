const beli = require('./beli.js')

var pensilObj = {
  item: 'pensil',
  harga: 9000,
  waktu: 1000,
}
var bukuObj = {
  item: 'buku',
  harga: 10000,
  waktu: 2500,
}
var penghapusObj = {
  item: 'penghapus',
  harga: 8000,
  waktu: 1500,
}
var pulpenObj = {
  item: 'pulpen',
  harga: 17000,
  waktu: 2000,
}
var kertasObj = {
  item: 'kertas',
  harga: 40000,
  waktu: 1500,
}


beli(50000, pensilObj)
.then(response => {
  console.log(response.message);
  return beli(response.kembalian, bukuObj)
})
.then(response => {
  console.log(response.message);
  return beli(response.kembalian, penghapusObj)
})
.then(response => {
  console.log(response.message);
  return beli(response.kembalian, pulpenObj)
})
.then(response => {
  console.log(response.message);
  return beli(response.kembalian, kertasObj)
})
.then(response => {
  console.log(response.message);
})

.catch(response => {
  console.log(response.message);
})
