const beli = require('./beli.js');

var wafer = {
  item: "Wafer",
  harga: 1000,
  waktu: 100
}

var permen = {
  item: "permen",
  harga: 2000,
  waktu: 1000
}

var haribo = {
  item: "haribo",
  harga: 200,
  waktu: 1000
}

var pepsi = {
  item: "pepsi",
  harga: 15000,
  waktu: 1000
}

var susu = {
  item: "susu",
  harga: 10000000,
  waktu: 200
}


beli(100000, wafer).then((result) => {
  return beli(result, permen);
})
.then((result) => {
  return beli(result, haribo);
})
.then((result) => {
  return beli(result, pepsi);
})
.then((result) => {
  return beli(result, susu);
})
.catch((error) => {
  console.log(error);
});
