let myPromise = new Promise((resolve, reject) => {
    resolve(slowMath.add(6,2));
});

myPromise.then((result) => {
    console.log(result);
    return slowMath.multiply(result, 2);
}).then((nextResult) => {
    console.log(nextResult);
}).catch((error) => {
    console.error(error);
});