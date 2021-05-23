const mongodb = require('mongodb');


function getMongodbInstance() {
    const MongoClient = mongodb.MongoClient;
    // Connection URL
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'userdb';

    MongoClient.connect(url, (err, client) => {
        if (err) {
            throw err;
            return;
        }
    
        console.log('Database connection successful');
    
        // This objects holds the refrence to the db
        const db = client.db(dbName);
    
        client.close();
    });
}

