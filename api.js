// const request = require('request')
const axios = require('axios')
const express = require("express")

const app = express()

app.use(express.json())

const port = 3000
app.listen(port, console.log(`Listening on port ${port}...`))

// 5 x string constants (may need to seperate these into seperate arrays, one with key and the other with timestamp and apiKey index)

const apiKeys = [
  {apiKey: "apikey1", lastUsed: null},
  {apiKey: "apikey2", lastUsed: null},
  {apiKey: "apikey3", lastUsed: null},
  {apiKey: "apikey4", lastUsed: null},
  {apiKey: "apikey4", lastUsed: null}
]

// Check API Key (requires middleware)

const checkAPIKey = () => {
  
}


// Retrieve Weather
const retrieveWeather = (city, country) => {
  return new Promise((resolve, reject) => {
    const apiKey = '788fd636d2797af705dd3d71c77f89d5'
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='
    const requestURL = `${weatherURL}${city},${country}&appid=${apiKey}`
    axios.get(requestURL)
      .then(response => {
        const status = response.status
        const weatherDescription = `Your weather report: ${response.data.weather[0].description}`
        const data = {
          status: status,
          message: weatherDescription
        }
        resolve(data)
      })
      .catch(response => {
        const errorStatus = response.response.data.cod
        const errorMessage = `Error: ${response.response.data.message}`
        const data = {
          status: errorStatus,
          message: errorMessage  
        }
        reject(data)
      })
    })
}

// Perform GET request

app.get('/:params', (req, res) => {
  const params = req.params.params.split("&")
  const city = params[0].split("=")[1]
  const country = params[1].split("=")[1]
  retrieveWeather(city, country)
    .then((data) => res.status(data.status).send(data.message))
    .catch((data) => res.status(data.status).send(data.message))
})
