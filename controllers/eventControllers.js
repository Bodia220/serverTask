const Event = require('../models/event')


exports.getEvents = async (req, res) => {
    const events = await Event.find({})
    res.send(events)
}

exports.getEvent = async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.send(event)
}

exports.addEvent = async (req, res) => {
    let result = await Event.create({
        title: req.body.title,
        desription: req.body.desription,
        eventDate: req.body.eventDate,
        organizer: req.body.organizer,
        registeredPeople: req.body.registeredPeople
    })
    res.send('good')
}

exports.addOnEvent = async (req, res) => {

    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            { $push: { registeredPeople: req.body } },
            { new: true, useFindAndModify: false }
        )

        res.send('good')
    } catch (error) {
        console.error(error)
        res.status(500).send('Помилка сервера')
    }
};
