function getCurrentPosition(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getCurrentPosition()
.then(position => console.log(position))
.catch(error => console.error(error));




