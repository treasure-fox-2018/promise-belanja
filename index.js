const beli = require ('./beli')

let nasiBungkus = {
  item: 'Nasi Bungkus',
  harga: 8000,
  waktu: 1000
}

let permen = {
  item: 'Permen',
  harga: 2000,
  waktu: 1000
}

let coklat = {
  item: 'Coklat',
  harga: 6000,
  waktu: 1000
}

let astor = {
  item: 'Astor',
  harga: 2000,
  waktu: 1000
}

let bonbon = {
  item: 'bonbon',
  harga: 3000,
  waktu: 1000
}

beli(20000, nasiBungkus)
.then(kembalian => {
  return beli(kembalian, permen)
  .then(kembalian => {
    return beli(kembalian, coklat)
    .then(kembalian => {
      return beli(kembalian, astor)
      .then(kembalian => {
        return beli(kembalian, bonbon)
      })
    })
  })
})
.catch(msg => {
  return msg
})