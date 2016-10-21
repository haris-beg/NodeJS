'use strict';

var express = require("express");
var Todo = require('../models/todo-model');
//var todos = require("../../mock/todos.json");

var router = express.Router();

router.get('/todos', function (req, res) {
    Todo.find({}, function (err, todos) {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        else {
            res.json({todos: todos});
        }
    });
});

// POST route to create new entries
router.post('/todos', function (req, res) {
    var todo = req.body;
    Todo.create(todo, function (err, todo) {
        if (err) {
            return res.status(500).json({err: err.message});
        } else {
            res.json({'todo': todo, message: 'Todo successfully created!'});
        };
    });
});

// TODO: add PUT route to update existing entries

// TODO: add DELETE route to delete entries

module.exports = router;