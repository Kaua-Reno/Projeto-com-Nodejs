const mongoose = require("mongoose");

async function main(){

    try{

        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://kaua:dPfTdx8tAxW61v6U@cluster0.49cbqmq.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log('Error: ${error}')
    }
}

module.exports = main