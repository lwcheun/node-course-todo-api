var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var app = express();
const port = process.env.PORT || 3000;

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

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;
  // validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      // if no doc, send 404
      return res.status(404).send();
    }
    // if doc, send doc back with a 200
    res.send({todo});
  }).catch((e) => {
    // 400 with empty body
    res.status(400).send();
  }); 
});

app.listen(port, () => {
  console.log(`Started up on port ${port}`);
});

module.exports = {app};