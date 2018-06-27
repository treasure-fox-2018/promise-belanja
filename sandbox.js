class Burger {
  constructor() {}

  static getOrder (stock) {
    return new Promise(function(resolve, reject) {
      if(stock >= 1) {resolve(`Ini mas cheese burger nya!`)}
      else {reject(`Habis tot!`)}
    });
  }
}

Burger.getOrder(0).then(success => {
  console.log(success);
}).catch(error => {
  console.log(error);
})

function doSomething() {
  return new Promise((resolve, reject) => {
    console.log("It is done.");
    // Succeed half of the time.
    if (Math.random() > .5) {
      resolve("SUCCESS")
    } else {
      reject("FAILURE")
    }
  })
}

function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}
// const promise = doSomething();
// promise.then(successCallback, failureCallback);
setTimeout(function () {
  doSomething().then(successCallback).catch(failureCallback);
}, 1000)
console.log("processing...");
