const beli = require('./beli.js');

class Object{
    constructor(item,harga,waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

console.log(beli)

var ikan = new Object('Ikan',10000,500)
var ayam = new Object('Ayam',20000,1000)
var telur = new Object('Telur',5000,2000)
var indomie = new Object('Indomie',2000,1000)
var tahu = new Object('Tahu',500,1500)

beli(20000,ikan).then(function(kembalian){
    return beli(kembalian,telur)
}).then(function(kembalian){
    return beli(kembalian,ayam)
}).then(function(kembalian){
    return beli(kembalian,tahu)
}).then(function(kembalian){
    return beli(kembalian,ayam)
}).catch(function(){

})