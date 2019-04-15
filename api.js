const axios = require("axios")
const express = require("express")

const app = express()

const apiKeys = []


const port = 3000
app.listen(port, console.log(`Listening on port ${port}...`))

// axios.get()