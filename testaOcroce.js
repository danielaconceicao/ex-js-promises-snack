function lanciaMoneta(result){
    return new Promise((resolve, reject) => {
        console.log('sto lanciando la moneta...');

        setTimeout(() => {
            const valore = Math.round(Math.random());
            const lancio = valore === 0 ? 'testa' : 'croce';
            
            if(lancio === result){
                resolve('Hai vinto');
            }else{
                reject('Hai perso');
            }
        }, 3000)
    })
}

lanciaMoneta('croce')
.then(messagio => console.log(messagio))
.catch(error => console.error(error))