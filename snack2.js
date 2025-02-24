function lanciaDado(){
    return new Promise((resolve, reject) => {
        console.log('sto lanciando il dato...');
        setTimeout(() => {
            if(Math.random() < 0.2){
                reject('il dado si è incastrato')
            }else{
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato)
            }
        }, 3000);
    })
}

lanciaDado()
    .then(risult => console.log(risult))
    .catch(err => console.error(err))