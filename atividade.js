const host = 'https://dattebayo-api.onrender.com';
const ids = 'https://dattebayo-api.onrender.com';

fetch(`${host}/characters`, {
    method: 'GET',
    hearders: {
        Accept: 'application/json'
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.characters[0]);
    console.log(data.characters[10]);
    console.log(data.characters[2]);
}).catch((error)=>{
    console.log(error)
})


fetch(`${host}/characters/${ids}`, {
    method: 'GET',
    hearders: {
        Accept: 'application/json'
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.characters[0].ids[0]);
    console.log(data.characters[10].ids[10]);
    console.log(data.characters[2].ids[2]);
}).catch((error)=>{
    console.log(error)
})