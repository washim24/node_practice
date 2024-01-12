//const {Mongoclient} =require('mongodb');
const Mongoclient =require('mongodb').MongoClient;
const url='mongodb://localhost:27017'; 
const client =new Mongoclient(url);

const database='ninza_db';

 async function connection() {
    let result =await client.connect();
    let Db=result.db(database);
    return Db.collection('ninza_pract');
}

module.exports=connection;
