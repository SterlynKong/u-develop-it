// require express
const express = require('express');

// require sqlite3
const sqlite3 = require('sqlite3').verbose();

// require db connection
const db = require('./db/database');

// set PORT to environment PORT else use specified PORT '3001'
const PORT = process.env.PORT || 3001;

// set app to instance of express.js
const app = express();

// require apiRoutes
const apiRoutes = require('./routes/apiRoutes');

// require inputCheck for data validation of request for candidate creation
const inputCheck = require('./utils/inputCheck');

// add middleware statements
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);


// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    db.get("PRAGMA foreign_keys = ON");
});

