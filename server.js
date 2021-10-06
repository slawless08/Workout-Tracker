const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(express.static("public"));

// Routes
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
})