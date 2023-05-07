// core mongodb
// expressJs <===> model (mongoDb Client) <= driver => DB
const { MongoClient } = require("mongodb");
// connect database
const MONGODB_URI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(MONGODB_URI); // instanc
const db = "3ri_batch1";

async function connect() {
  try {
    await client.connect();
    return client.db(db); // db instance
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = connect;
