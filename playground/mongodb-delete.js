// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  // deleteMany
//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
//   });
  
  // deleteOne
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
//   });
  
  // findOneAndDelete
//   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
//   });

  // deleteMany
//   db.collection('Users').deleteMany({name: 'Nathan'}).then((result) => {
//     console.log(result);
//   });
  
  // findOneAndDelete id
//   db.collection('Users').findOneAndDelete({
//     _id: new ObjectID('5c68d1d6e9e6e5d1196581e5')
//   }).then((result) => {
//     console.log(result);
//   });
  
  //client.close();
});