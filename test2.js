const makePromise = (text, delay)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(text);
        },delay);
    });
};

const promiseA= makePromise("text test", 5000);
const promiseB= makePromise("text test2", 2000);

Promise.all([promiseA, promiseB])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});
