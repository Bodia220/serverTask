const express = require('express')
const app = express()
const port = 3001
const mongoose = require("mongoose")
const cors = require('cors')

const DBNAME = "task"
const URI = `mongodb+srv://bogdanmaskal:LjbW2dgnel3j0GXB@task1.ljo5but.mongodb.net/${DBNAME}`


const eventRouter = require('./Routes/eventRoutes')

app.use(cors())

app.use('/api/event', eventRouter)

async function main() {
    try {
        await mongoose.connect(URI)
        console.log(`DB Connection successfully`)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err)
    }
}

main()

process.on("SIGINT", async () => {
    await mongoose.disconnect()
    console.log("Disconnect is successfully !")
    process.exit()
})
