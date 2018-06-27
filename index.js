const beli = require('./beli.js');

let permen = {
  item: 'permen',
  harga: 1000,
  waktu: 2000,
}
let cola = {
  item: 'cola',
  harga: 5000,
  waktu: 1500,
}
let greenTea = {
  item: 'green tea',
  harga: 10000,
  waktu: 1000,
}

beli(100000, permen)
.then(
  result => {
  console.log(result.msg)
  return beli(result.change, cola)},
  err => {
    return err;
  }
)
.then(
  result => {
  console.log(result.msg)
  return beli(result.change, greenTea)},
  err => {
    return err;
  }
).then(
  result => {
  console.log(result.msg)
  return beli(result.change, cola)},
  err => {
    return err;
  }
)
