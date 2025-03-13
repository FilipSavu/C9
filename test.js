const isSucces = true;

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(isSucces){
            resolve("Succes")
        }
        else reject ("Mega Fail")
    },2000)
});

promise.then((value)=>{
    console.log(value);
    value="Promise value"
    return value;
}).then((value)=>{
    console.log(value)
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise complete");
});


