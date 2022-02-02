const mongoose = require("mongoose");
const dotenv=require('dotenv')
const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL

        mongoose
            .connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Database Successfully Connected");
            });
    } catch (error) {
        console.log("Error connecting to Database");
        process.exit(1);
    }
};

module.exports = connectDB;