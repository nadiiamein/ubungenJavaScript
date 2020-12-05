class NadiiPromise {
then()
catch()
finally()
}

 const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
    resolve('NgRx')
}, 150)
})
promise
.then(course => {
    console.log('Nadiia Promise', course)
})
.catch(err => console.log('Error:', err))
.finally(() => console.log ('Finally'));

module.exports = NadiiPromise;