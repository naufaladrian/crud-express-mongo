const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

require('dotenv').config();


async function connect() {
    try {
        const client = await MongoClient.connect(process.env.DB_URI);
        database = client.db('db1');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }
}


function getDb() {
    if (!database) {
        throw { message: 'database cnonection not establish' }
    }
    return database;
}

module.exports = {
    connectToDb: connect,
    getDb: getDb
}