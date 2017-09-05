const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDszQctV5hJtT2W6Unri9_wDWvVHzSGWhc`,
    json: true
  }, (error, response, body) => {
    if (body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitute: body.results[0].geometry.location.lng,
      })
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Address is not found');
    } else {
      callback('Unable to connect to Google server');
    }

  });
};



module.exports.geocodeAddress = geocodeAddress;
