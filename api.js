require('dotenv').config()
const axios = require('axios')
const express = require("express")

const app = express()

app.use(express.json())

const port = 3000
app.listen(port, console.log(`Listening on port ${port}...`))

var apiKeys = {
  apikey1: 5,
  apikey2: 5,
  apikey3: 5,
  apikey4: 5,
  apikey5: 5
}

setInterval(function(){
  Object.keys(apiKeys).forEach(key => {
    if(apiKeys[key] < 5){
      apiKeys[key] ++
    }
  })
}, 12*60*1000) // If you have 5 calls an hour, thats the equivalent of one every 12 minutes. Implementing it this way means it acts as a moving 60 minutes.

const checkAPIKey = (req, res, next) => {
  const headers = req.headers
  const apikey = headers.apikey
  if(apikey in apiKeys){
    if (apiKeys[apikey] > 0) {
      apiKeys[apikey] = apiKeys[apikey] - 1 
      next()
    } else {
      res.status(429).send("Error: Request limit has been exceeded (max. calls 5 per hour).")
    }
  } else {
    res.status(403).send("Error: That API key does not exist.")
  }
}

app.use(checkAPIKey)

const retrieveWeather = (city, country) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.WEATHER_API_KEY
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

app.get('/:params', (req, res) => {
  const params = req.params.params.split("&")
  const city = params[0].split("=")[1]
  const country = params[1].split("=")[1]
  retrieveWeather(city, country)
    .then((data) => res.status(data.status).send(data.message))
    .catch((data) => res.status(data.status).send(data.message))
})