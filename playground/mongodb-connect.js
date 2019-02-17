// MongoDB v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// Object Detstructuring
// var user = {user: 'leon', age: 33};
// var {name} = user;
// console.log(name);

// 2 args: URL of connection & callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {	
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });

  // Insert new doc into Users (name, age, location)
//   db.collection('Users').insertOne({
//     name: 'Leon',
//     age: 33,
//     location: 'New Jersey'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert into user', err);
//     }
//     
//     console.log(result.ops[0]._id);
//     console.log(result.ops[0]._id.getTimestamp());    
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
  
  client.close();
});