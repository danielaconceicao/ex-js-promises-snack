function getPostTitle(id){
    const promisse = new Promise((resolve, reject) => {
        
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(reject);
    })

    return promisse
}

getPostTitle(1)
.then(data => console.log(data.title))
.catch(error => console.log(error));
