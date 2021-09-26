const admin = require('firebase-admin');
var serviceAccount = require('../fake-ig-demo-firebase-adminsdk-df558-213185573c.json');

admin.initializeApp({
    apiKey: "AIzaSyAMNmOavSsAwKoNDTEVBJTVzCqrhvG1Ld4",
    authDomain: "fake-ig-demo.firebaseapp.com",
    projectId: "fake-ig-demo",
    storageBucket: "fake-ig-demo.appspot.com",
    messagingSenderId: "736644692439",
    appId: "1:736644692439:web:5ce6778a59b5d531e7f392",
    measurementId: "G-RNXWZFEG7B"
});

module.exports = admin;