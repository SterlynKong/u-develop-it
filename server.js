// require express
const express = require('express');

// set PORT to environment PORT else use specified PORT '3001'
const PORT = process.env.PORT || 3001;
// set app to instance of express.js
const app = express();


// add middleware statements
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// start app and listen on PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

