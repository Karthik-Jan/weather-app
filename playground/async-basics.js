console.log('starting app');

setTimeout(() => {
  console.log('inside the function')
},2000);

//setTimeout(callback function, delay);

setTimeout(() => {
  console.log('the other one inside function')
});

console.log('closing app');
