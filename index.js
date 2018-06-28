const beli = require('./beli.js');

var uang = 100000;
var obj1 = {item: 'Burger', harga: 30000, waktu: 150};
var obj2 = {item: 'Hot Dog', harga: 25000, waktu: 200};
var obj3 = {item: 'Cola', harga: 15000, waktu: 300};
var obj4 = {item: 'Fries', harga: 20000, waktu: 300};
var obj5 = {item: 'Cheese Burger', harga: 25000, waktu: 50};

beli(uang, obj1)
.then(function(kembalian){
    return beli(kembalian, obj2)
})
.then(function(kembalian){
    return beli(kembalian, obj3)
})
.then(function(kembalian){
    return beli(kembalian, obj4)
})
.then(function(kembalian){
    return beli(kembalian, obj5)
})
.catch(function(message){
    console.log(message)
})


/*
NOTE
di file beli.js line 9 yg awalnya kembalian cuma &{kembalian}, saya gnti ke sisa uang cuma ${uang}.
karena kalau kembalian nanti jadinya -xxx sesuai dgn kembalian dikurang harga barang.
klu pakai uang jdinya nge return uang yg terakhir biar lebih make sense aja
*/