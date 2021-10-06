const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
})