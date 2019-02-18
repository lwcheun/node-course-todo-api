const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// var id = '5c69f947d8f284152cc8b2a8';
// 
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// };
// 
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
// 
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
// 
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5c69c8d25e87a6113cbd6fe8';
 
User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));