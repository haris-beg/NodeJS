'use strict';

var TodoModel = require('./models/todo-model');

var todos = [
    'Feed the dog',
    'Walk the kids',
    'Water the trees'
];

todos.forEach(function (todo, index) {
    TodoModel.find({'name': todo}, function (err, todos) {
       if (!err && !todos.length) {
           TodoModel.create({completed: false, name: todo});
       };
    });
});