var getUser = (id, callback) => {
  user ={
    id:id,
    name:'kiran'
  };
  setTimeout(() => {
    callback(user);
  },3000);

};

getUser(123, (userObject) => {
  console.log(userObject)
});
