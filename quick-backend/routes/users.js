const express = require('express');
const router = express.Router();
const users = require('../Users');

// Get All Users
router.get('/', (req, res) => res.json(users));

// Create a new user
router.post('/', (req, res) => {
  res.json({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  });
});

module.exports = router;
