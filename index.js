let beli = require('./beli.js')


let saldo = 500000

let Sepatu = {
  item: 'Adidas',
  harga: 30000,
  waktu: 2000
}

let Buku = {
  item: 'Magic',
  harga: 1000,
  waktu: 3000
}

let laptop = {
  item: 'Mac',
  harga: 35000,
  waktu: 4000
}

let Snack = {
  item: 'Choco Chips',
  harga: 100000,
  waktu: 1300
}



beli(saldo, Sepatu)
  .then(function (change) {
    return beli(change, Buku)
  })
  .then(function (change) {
    return beli(change, laptop)
  })
  .then(function (change) {
    return beli(change, Snack)
  })
  .catch(function (error) {
    console.log(error)
  })
