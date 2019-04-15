const axios = require("axios")
const express = require("express")

const app = express()
app.use(express.json());

const port = 3000
app.listen(port, console.log(`Listening on port ${port}...`))

const apiKeys = [] // 5 x string constants

// API Key is rate limited to 5 weather reports an hour. After that your service should respond in a way which communicates that the hourly limit has been exceeded.

// Have a URL that accepts both a city name and country name

app.get('/:params', (req, res) => {
  res.status(200).send("GET request received!")
  console.log("Params:", req.params)
  console.log(req.headers)
})

// Based upon these inputs, and the API Key, your service should decide whether or not to call the OpenWeatherMap name service.

// If it does, the only weather data you need to return to the client is the description field from the weather JSON result

// Reject requests with invalid input or missing API Keys.
