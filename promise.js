const promise = new Promise((resolve, reject)=>{
    var nome = 1;
    if (nome == 1){
        resolve("Promessa cumprida")
    }else{
        reject("Promessa descumprida")
    }
})

promise.then((data)=>{
    return data.toLowerCase()
}).then((threadData)=>{
    console.log(threadData)
}).catch((error)=>{
    console.log(error)  
})

const host = 'https://dattebayo-api.onrender.com';

fetch(`${host}/characters`, {
    method: 'GET',
    hearders: {
        Accept: 'application/json'
    }

}).then((data)=>{
    console.log(data.characters[0].images[0]);
    console.log(data.characters[0])
    let jutsu = data.characters[0].jutsu;
    for(let count = 0; count < jutsu.lenght; count++){
        console.log(jutsu[count].toUpperCase())
    }
}).catch((error)=>{
    console.log(error)
})