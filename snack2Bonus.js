function creaLanciaDado() {
    let ultimoLancio = null; //Salva o último resultado do dado

    return function(){
        return new Promise((resolve, reject) => {
            console.log('sto lanciando il dato...');
            setTimeout(() => {
                if (Math.random() < 0.2) { //Existe uma chance de 20% de cair nesse bloco
                    ultimoLancio = null; //Se isso acontecer, apagamos o último resultado do dado.
                    reject('il dado si è incastrato'); //A Promise é rejeitada e um erro é lançado.
                } else {
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    if(risultato === ultimoLancio) console.log('incredibile!');
                    ultimoLancio = risultato;
                    resolve(risultato);
                }
            }, 3000);
        })
    }
}

const dado = creaLanciaDado();

dado()
    .then(risult => {
        console.log(risult)// Mostra o primeiro resultado
        dado()
            .then(risult => console.log(risult)) //Lança de novo
            .catch(err => console.error(err)); //Captura erro do segundo lançamento
    })
    .catch(err => console.error(err)); //Captura erro do primeiro lançamento