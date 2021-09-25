const admin = require('firebase-admin');

admin.initializeApp({
    serviceAccountId: 'firebase-adminsdk-df558@fake-ig-demo.iam.gserviceaccount.com'
});

module.exports = admin;