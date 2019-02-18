const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var app = express();

// Configure middleware
app.use(bodyParser.json());

// Configure routes
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); 
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12341234
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  } 

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => { 
    res.status(400).send();
  });    
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};