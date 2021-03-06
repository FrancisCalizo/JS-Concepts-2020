const express = require('express');
const app = express();

const users = require('./routes/users');

// User Express Body Parser
app.use(express.json());

// API Routes (Users)
app.use('/users', users);

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
