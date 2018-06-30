
let beli = require('./beli.js')

class jajan {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu

    }


}


class Chiki extends jajan {
    constructor() {
        super('taro', 7000, 1000)
        // this.item = 'taro'
        // this.harga = 7000
        // this.waktu = 1000

    }

}

class Coklat extends jajan {
    constructor() {
        super('yamyam', 5000, 1000)
        // this.item = 'yamyam'
        // this.harga = 5000
        // this.waktu = 1000

    }
}

class Permen extends jajan {
    constructor() {
        super("milkita", 2000, 1000)
        // this.item = 'milkita'
        // this.harga = 2000
        // this.waktu = 1000

    }

}

class Minum extends jajan {
    constructor() {
        super('nutriSari', 5000, 1000)
        // this.item = 'nutriSari'
        // this.harga = 5000
        // this.waktu = 1000
    }

}


class Biskuit extends jajan {
    constructor() {
        super('regal', 5000, 1000)
        // this.item = 'regal'
        // this.harga = 5000
        // this.waktu = 1000

    }

}


let chiki = new Chiki()
let coklat = new Coklat()
let permen = new Permen()
let minum = new Minum()
let biskuit = new Biskuit()

let uang = 30000

// beli(uang, chiki, function(value){
//     beli(value, coklat, function(value){
//         beli(value, permen, function(value){
//             beli(value, minum, function(value){
//                 beli(value, biskuit, function(){

//                 })
//             })
//         })
//     })    
// })

beli(uang, chiki)
    .then(kembalian => {

        return beli(kembalian, coklat)
    }).then(kembalian => {
        return beli(kembalian, permen)
    }).then(kembalian => {

        return beli(kembalian, minum)
    }).then(kembalian => {
        return beli(kembalian, biskuit)
    }).catch(kembalian => {
        return kembalian;
    })