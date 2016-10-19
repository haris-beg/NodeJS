'use strict';

var express = require("express");

var router = express.Router();

router.get('/todos', function (req, res) {
    res.json({todos: []});
});

// TODO: add POST route to create new entries

// TODO: add PUT route to update existing entries

// TODO: add DELETE route to delete entries

module.exports = router;