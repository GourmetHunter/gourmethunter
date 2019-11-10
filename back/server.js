const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(bodyParser.json());

const databaseURI='mongodb+srv://huyhoang:hoang1001@cluster0-sh1mj.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect( databaseURI, _mongo_connected ,{useUnifiedTopology: true});

function _mongo_connected( error) {
    if (error) {
        throw error;
    }
    console.log("MongoDB database connection established successfully");
}
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


