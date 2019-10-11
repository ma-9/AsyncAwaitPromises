const Promise1 = Promise.resolve('Hello Manav');
const Promise2 = 99;
const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000, 'GoodByeBro')
})
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        (res) => res.json()
    )

Promise.all([
    Promise1,
    Promise2,
    Promise3,
    Promise4
])
    .then(
        (values) => console.log(values)
    )