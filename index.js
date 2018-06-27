'use strict'
let beli = require('./beli.js')

class Barang{
    constructor(item, harga, waktu){
        this.item = item,
        this.harga = harga,
        this.waktu = waktu
    }
}

let Permen = new Barang('Permen',3000,2000)
let Roti = new Barang('Roti',7000,2000)
let Susu = new Barang('Susu',7000,4000)
let Garem = new Barang('Garem',2000, 2000)
let Terigu = new Barang('Terigu',5000,2000)

beli(20000, Permen)
    .then((kembalian) => {
        return beli(kembalian, Roti);
    })
    .then((kembalian) => {
        return beli(kembalian, Susu);
    })
    .then((kembalian) => {
        return beli(kembalian, Garem);
    })
    .then((kembalian) => {
        return beli(kembalian, Terigu);
    })
    .catch((error) => {
        console.log(error);
    }
);