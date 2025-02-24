function getPost(id){
    const promisse = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            fetch(`https://dummyjson.com/users/${data.userId}`)
            .then(res => res.json())
            .then(user => resolve({...data, user}))
            .catch(reject)
        })
        .catch(reject)
    })

    return promisse
}

getPost(1)
.then(data => console.log(data))
.catch(error => console.error(error))

