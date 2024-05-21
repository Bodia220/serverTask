const express = require('express')
const { addEvent, getEvent, getEvents, addOnEvent } = require('../controllers/eventControllers')
const parser = express.json()
const eventRouter = express.Router()

eventRouter.get('/', getEvents)
eventRouter.get('/:id', getEvent)
eventRouter.post('/', parser, addEvent)
eventRouter.post('/:id', parser, addOnEvent)


module.exports = eventRouter