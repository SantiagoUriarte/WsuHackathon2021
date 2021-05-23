const express = require("express");
const { access } = require("fs");
const mongodb = require('mongodb');
const path = require("path");
const pathUtils = require("../util/pathUtils");

// Create Router
const router = express.Router();

// Routes

// GET METHODS


// POST METHODS

/* 
    Method that handles creating a new health plan and saving data to mongoDB
    - Takes in the form data as a JSON object to be parsed and stored in MongoDB
    - Returns an access code which allows patients to retrieve the saved health plan
*/
router.post('/api/physician/health-plan', (req, res) => {
    const MongoClient = mongodb.MongoClient;
    // Connection URL
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'projectAdherence';
    MongoClient.connect(url, (err, client) => {
        if (err) {
            throw err;
            return;
        }
    
        console.log('Database connection successful');
    
        // This objects holds the refrence to the db
        const db = client.db(dbName);
        const collection = db.collection('medicalPlans');

        // Insert req into the database
        collection.insertOne(req.body, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            
            let responseJson = {
                "message": "Medical plan saved successfully!",
                "accessCode": result['ops'][0]["_id"]
            }
            res.send(responseJson);
        });
        client.close();
    });
})

module.exports = router;