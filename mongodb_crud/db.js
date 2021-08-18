const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser: true};

const dbname = "Songs";

const state = {
    db: null,
    dbUsers: null
}

const connect = (callback) => {
    // Nếu database đã được kết nối, không thì sẽ gọi database ở phía client
    if(state.db)
        callback();
    else{
        MongoClient.connect(url, mongoOptions, (err, client)=>{
            if(err)
                callback(err);
            else{
                state.db = client.db(dbname);
                callback();
            }
        });
    }
}
const getDB = () => {
    return state.db;
}


const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

module.exports = {getDB, connect, getPrimaryKey};