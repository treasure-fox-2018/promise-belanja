var beli = require('./beli.js')

var uang = 100000;

var objArr = [
  {
    item: 'Steak',
    harga: 30000,
    waktu: 2000
  },
  {
    item: 'Indomie Goreng Dobel',
    harga: 14000,
    waktu: 5000
  },
  {
    item: 'Jus Apel',
    harga: 14000,
    waktu: 6000
  },
  {
    item: 'Tiket Nonton Film',
    harga: 25000,
    waktu: 7000
  },
  {
    item: 'Nu Milk Tea 3',
    harga: 30000,
    waktu: 10000
  },
];

beli (uang, objArr[0])
  .then (kembalian => {
    return beli(kembalian, objArr[1]);
  })

  .then (kembalian => {
    return beli(kembalian, objArr[2]);  
  })

  .then (kembalian => {
    return beli(kembalian, objArr[3]);
  })
  
  .then (kembalian => {
    return beli(kembalian, objArr[4]);  
  })
  
  .catch (error => {
    console.log(error)
  });



