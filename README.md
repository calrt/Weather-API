# RESTful Weather API

This is an API for making calls to the [OpenWeather](https://openweathermap.org/api) service using [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/en/api.html), and [Axios](https://github.com/axios/axios).

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

## Usage
Access the API by making a GET request using a valid city and [ISO 3166 country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) to: 
> localhost:3000/city={city}&country={country code}  

For example:
> localhost:3000/city=melbourne&country=au


Provide a valid API key within your request headers in the form of:
```bash
apikey: {yourAPIKey}
``` 

## Dependencies
- [Express](https://expressjs.com/en/api.html)
- [Axios](https://github.com/axios/axios)


## License
[MIT](https://choosealicense.com/licenses/mit/)