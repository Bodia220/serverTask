const mongoose = require('mongoose')

const Schema = mongoose.Schema


const eventSchema = new Schema({
    title: String,
    description: String,
    eventDate: Date,
    organizer: String,
    registeredPeople: Array
})

module.exports = mongoose.model('event', eventSchema)