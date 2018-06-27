const beli = require("./beli")

class Burger {
  constructor () {
    this.item = "Burger"
    this.harga = 25000
    this.waktu = 3000
  }
}

class Pizza {
  constructor () {
    this.item = "Pizza Hut"
    this.harga = 50000
    this.waktu = 3500
  }
}

class Roti {
  constructor () {
    this.item = "Roti'O"
    this.harga = 20000
    this.waktu = 2000
  }
}

class Hokben {
  constructor () {
    this.item = "Hokben"
    this.harga = 25000
    this.waktu = 2500
  }
}

class Chatime {
  constructor () {
    this.item = "Chatime"
    this.harga = 18000
    this.waktu = 1000
  }
}

const burger    = new Burger()
const pizza     = new Pizza()
const roti      = new Roti()
const hokben    = new Hokben()
const chatime   = new Chatime()

let uang = 400000
beli(uang, burger)
  .then(kembalian => {
    return beli(kembalian, pizza)
  })
  .then(kembalian => {
    return beli(kembalian, roti)
  })
  .then(kembalian => {
    return beli(kembalian, hokben)
  })
  .then(kembalian => {
    return beli(kembalian, chatime)
  })
  .catch(err => {
    console.log("Selesai");
  })