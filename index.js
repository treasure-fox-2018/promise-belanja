var beli = require('./beli.js');

let cupcakes = {item : 'cupcakes chocolate',harga : 25000, waktu: 1000};
let cheesecakes = {item : 'cheesecakes',harga : 225000, waktu: 1000};
let chocolatecakes = {item : 'chocolatecakes',harga : 200000, waktu: 1000};
let rainbowcakes = {item : 'rainbowcakes',harga : 215000, waktu: 1000};
let donuts = {item : 'donuts',harga : 15000, waktu: 1000};
let uang = 700000;

beli(uang,cupcakes)
    .then(function(data){
        return beli(data,cheesecakes)
    })
    .then(function(data){
        return beli(data,chocolatecakes)
    })
    .then(function(data){
        return beli(data,rainbowcakes)
    })
    .then(function(data){
        return beli(data,donuts)
    })
    .catch(function(err){
        console.log(err)
    })
