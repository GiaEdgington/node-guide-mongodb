const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email){
        this.name = username;
        this.email = email;
        //this._id = new mongodb.ObjectId(id);
    }

    save() {
        const db = getDb();
        db.collection('users').insertOne('this')
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users')
        .findOne({_id: mongodb.ObjectId(userId) })
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = User;
