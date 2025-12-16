const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successfull");
    }
    else {
        reject("Operation failed");
    }
});

//consume a promise

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise is settled"));


//another example

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 3000);
    });
}
getData().then(msg => console.log(msg));

// example
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    },2000);
});
promise1.then((value) => console.log(value));