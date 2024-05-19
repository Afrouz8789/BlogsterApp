const mongoose = require('mongoose')
const keys = require('../config/keys')
const connectToDb = async () => {
    try {
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to db successfully')
    } catch (error) {
        console.log(`Failed to connect to db with error - ${error.message}`)
    }
}
module.exports = {
    connectToDb
}