const express = require('express');
const cors = require('cors');
const { checkIfAuthenticated } = require('./services/token.service');
const tokenRoute = require('./routes/token.route');
const usersRoute = require('./routes/users.route');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
    res.send('healthy');
});

app.use('/api/verifyToken', checkIfAuthenticated, tokenRoute);
app.use('/api/users', checkIfAuthenticated, usersRoute);

app.listen(port);