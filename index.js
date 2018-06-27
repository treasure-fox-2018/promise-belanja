var beli = require('./beli.js')

var permen = {item : 'permen', harga : 500, waktu : 5000}
var mie = {item : 'mie', harga : 2500, waktu : 1000}
var gorengan = {item : 'gorengan', harga : 1000, waktu : 3000}
var teh = {item : 'teh sisri', harga : 2000, waktu : 2000}
var pulpen = {item : 'pulpen', harga : 2500, waktu : 4000}

beli(5000,permen)
    .then(response => {
        return beli(response,mie)
    })
    .then(response => {
        return beli(response,gorengan)
    })

    .then(response => {
        return beli(response,teh)
    })

    .then(response => {
        return belanja(response,pulpen)
    })
    .catch(response => {
        console.log('selesai');
        
    })


