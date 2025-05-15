const host = 'https://dattebayo-api.onrender.com';

fetch(`${host}/characters`, {
    method: 'GET',
    hearders: {
        Accept: 'application/json'
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.characters[0]);
}).catch((error)=>{
    console.log(error)
})