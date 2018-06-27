let beli = require('./beli.js');

let uang = 100000;

let fruit = {'item': 'pineapple', 'harga': 35000, 'waktu': 2000};
let beef = {'item': 'steak', 'harga': 60000, 'waktu': 3000};
let dessert = {'item': 'jelly', 'harga': 10000, 'waktu': 1000};


// function hitungUang(kembalian) {
//     uang = uang - kembalian;
//     console.log(uang);
// }

// beli(uang, pineapple, function (kembalian) {
//     beli(kembalian, beef, function (kembalian) {
//         beli(kembalian, dessert, function (kembali) {
//             hitungUang(kembalian)
//         })
//     })
// })

beli(uang, beef)
.then((kembalian) => {
    return beli(kembalian, dessert)
    .then((kembalian) => {
        return beli(kembalian, fruit)
        .then((kembalian) => {
            return kembalian
        })
    })
})
.catch((err) => {
    console.log('Not enough money')
})