const getData = new Promise((res, rej) => {
    // res(56665);
    rej('No Data available');
})

getData
    .then(data => console.log(data + 100))
    .catch(err => console.log('ERR::', err))







