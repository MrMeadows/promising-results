let myPromise = new Promise((resolve, reject) => {
    resolve(slowMath.add(6,2));
});

myPromise.then((result) => {
    console.log(result);
    return slowMath.multiply(result, 2);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.divide(nextResult, 4);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.subtract(nextResult, 3);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.add(nextResult, 98);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.remainder(nextResult, 2);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.multiply(nextResult, 50)
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.remainder(nextResult, 40);
}).then((nextResult) => {
    console.log(nextResult);
    return slowMath.add(nextResult, 32);
}).then((nextResult) => {
    console.log(`The final result is ${nextResult}.`)
}).catch((error) => {
    console.error(error);
});