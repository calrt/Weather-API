# Weather API

This is an API for making calls to the [OpenWeatherMap](https://openweathermap.org/api) service using [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/en/api.html), and [Axios](https://github.com/axios/axios).

### Features:
- API key scheme.
- API key rate-limiting (5 weather reports an hour).

## Installation

Within the project folder, to install dependencies run:

```bash
npm install
```

To start the Express server run: 

```bash
npm start
```  
  
Replace the below within ```retrieveWeather()``` with an [API key supplied from the Open Weather Map service](https://openweathermap.org/api).
```javascript
const apiKey = process.env.WEATHER_API_KEY
```

## Usage
Access the API by making a GET request using a valid city and [ISO 3166 country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) to: 
> localhost:3000/city={city}&country={country code}  

For example:
> localhost:3000/city=melbourne&country=au


Provide a valid API key within your request headers in the form of:
```bash
apikey: {yourAPIKey}
```  

Valid API keys can be found within the apiKeys object.

## Dependencies
- [Express](https://expressjs.com/en/api.html)
- [Axios](https://github.com/axios/axios)

## Testing
In order to test the functionality of the API I conducted manual scenario tests to ensure the desired features were correctly implemented.  

✅ Incorrect city parameters returns "Error: city not found" with 404 Not Found status.  
✅ No/incorrect API key returns "Error: That API key does not exist." with 403 Forbidden status.  
✅ Exceeding the API call limit returns "Error: Request limit has been exceeded (max. calls 5 per hour)." with 429 Too Many Requests status.  
✅ Valid call (correct API key, within request limit, and with valid city and country parameters) returns "Your weather report: {current weather description}" with 200 OK status.  


## License
[MIT](https://choosealicense.com/licenses/mit/)