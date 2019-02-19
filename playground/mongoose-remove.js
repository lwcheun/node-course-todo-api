const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

/* Removes everything from database */
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

/* Removes one and returns document */
Todo.findOneAndRemove().then((todo) => {
  console.log(todo);
});

/* Removes one by ID and returns document */
Todo.findByIdAndRemove('').then((todo) => {
  console.log(todo);
});