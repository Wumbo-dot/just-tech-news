const User = require('./User');
const bcrypt = requrie('bcrypt');

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    //Store hash in your password db.
});

module.exports = { User };
