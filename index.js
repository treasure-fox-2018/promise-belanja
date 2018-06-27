const beli = require('./beli.js')

var barang = [{
    item: 'sushi',
    harga: 20000,
    waktu: 2000
  },{
    item: 'gorengan',
    harga: 10000,
    waktu: 2000
  },{
    item: 'softdrink',
    harga: 8000,
    waktu: 2000
  },{
    item: 'rujak',
    harga: 3000,
    waktu: 2000
  },{
    item: 'nasi goreng',
    harga: 10000,
    waktu: 2000
  }]
  
  beli(60000,barang[0])
  .then(function(success){
    return beli(success,barang[1])
  })
  .then(function(success){
    return beli(success,barang[2])
  })
  .then(function(success){
    return beli(success,barang[3])
  })
  .then(function(success){
    return beli(success,barang[4])
  })
  .catch(function(error) {
    console.log(error);
  })