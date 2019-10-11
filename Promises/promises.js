const posts = [
    {title: 'One Post', Description: 'This is One Post'},
    {title: 'Second Post', Description: 'This is Second Post'}
]

function getPost() {
    setTimeout(()=>{
        let Result = '';
        posts.forEach((post,index) => {
            Result += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = Result;
    }, 1000)
}

// getPost();

function createPost(newPost) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(newPost);
            // const error = true; // When it is True, You may see an error in Console in Browser
            const error = false;
            
            if(!error){
                resolve();
            }else{
                reject('Error: Something Went Wrong');
            }

        }, 2000)
    });
}

createPost({ title: 'Third Post', Description: 'This is Third Post '})
    .then(getPost)
    .catch(err => console.log(err))