// Import modules
const express = require('express');
const patientRoutes = require('./routes/patient');
const physicianRoutes = require('./routes/physician');

// Initialize Express
const app = express();
const port = 3001;

// Initialize Middleware
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(patientRoutes);
app.use(physicianRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send("Hello World from the Project Adherence Backend Server!");
})

// Start Server
app.listen(port);