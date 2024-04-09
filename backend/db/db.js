const mongoose = require('mongoose')
const connectingString = 'mongodb+srv://abhinav:12345@cluster0.sx3heqx.mongodb.net/?retryWrites=true&w=majority'
const db = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(connectingString)
        console.log("DB connected")
    } catch (error) {
        console.log("DB connection failed with error: ", error)
    }
}

module.exports = { db }