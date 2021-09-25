const express = require('express');
const cors = require('cors');
const { checkIfAuthenticated } = require('./services/token.service');
const tokenRoute = require('./routes/token.route');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
    res.send('healthy');
});

app.use('/api/verifyToken', checkIfAuthenticated, tokenRoute);

app.listen(port);