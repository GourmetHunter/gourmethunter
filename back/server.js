const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute=require('./routes/user.route');
const config=require('./config/helper');
const PORT = config.port;

app.use(bodyParser.json());


const databaseURI=config.mongoUri;
mongoose.connect( databaseURI, _mongo_connected ,{useUnifiedTopology: true});

function _mongo_connected( error) {
    if (error) {
        throw error;
    }
    console.log("MongoDB database connection established successfully");
}

app.use('/user',userRoute);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


