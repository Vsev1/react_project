const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log(err);
    });


const contactRoute = require("./routes/contact");
app.use("/api", contactRoute);

const formRoute = require("./routes/form");
app.use("/api", formRoute);

app.use(express.static(path.join(__dirname, '../client')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.listen(5000, () => {
    console.log('Server started on port 5000');
});