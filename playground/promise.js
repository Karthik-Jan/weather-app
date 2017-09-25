var somePromise = new Promise((resolve, reject) => {
  resolve("its worked");
  //reject('unable to fullfil the request')
});

somePromise.then((message) => {
  console.log('Succes :', message );
},(errorMessage) => {
  console.log('Failed :', errorMessage);
})
