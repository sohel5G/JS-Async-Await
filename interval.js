console.log(1);
console.log(2);
console.log(3);

let varName = 1;

const setIntervalId = setInterval(() => {
    console.log( varName++ );
}, 1000);


const settimeId = setTimeout(() => {
    clearInterval(setIntervalId) 
}, 5000);


// clearTimeout(settimeId);

console.log(5);
console.log(6);
console.log(7);

















