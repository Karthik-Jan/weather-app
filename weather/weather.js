const request = require('request');

var getWeather = (lati,longi, callback) => {

  request({
    url: `https://api.darksky.net/forecast/30ef7bd21b20127f87e635550bf78d16/${lati},${longi}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch the data')
    }

  });
};

module.exports.getWeather = getWeather;
