const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config/env.js")

const connectToDb = async ()=>{
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB Connected");
    }catch(e){
        console.error("MongoDB connection error:", e);
    }
}

module.exports = connectToDb;