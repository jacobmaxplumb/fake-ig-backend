const admin = require('firebase-admin');
var serviceAccount = require('../fake-ig-demo-firebase-adminsdk-df558-213185573c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;