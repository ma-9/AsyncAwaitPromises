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

function createPost(newPost, callbacks) {
    setTimeout(() => {
        posts.push(newPost);
        callbacks();
    }, 2000)
}

async function AsyncAwaitFunction(){
     await createPost(
        {title: 'Third Post', Description: 'This is Third Post', newID: 'aasa'},
        getPost
    )
}

AsyncAwaitFunction();