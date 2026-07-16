
const {MongoClient} = require("mongodb");

const client = new MongoClient(process.env.DB_URL);

let dbConnection = async()=>{
    await client.connect();
    let db = client.db("formdb");
    return db;
}

module.exports={dbConnection}