let myPromise = new Promise((resolve, reject) => {
    resolve(slowMath.add(6,2));
});

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error);
})