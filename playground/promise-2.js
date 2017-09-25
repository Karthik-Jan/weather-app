var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  return(
    new Promise((resolve, reject) {
      request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDszQctV5hJtT2W6Unri9_wDWvVHzSGWhc`,
        json: true
      }, (error, response, body) => {
        if (body.status === "OK") {
          resolve(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitute: body.results[0].geometry.location.lng,
          })
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Address is not found');
        } else {
          reject('Unable to connect to Google server');
        }

      });
    });
  );

};

geocodeAddress('75252').then((location) => {
  console.log(JSON.stringify(location))
}, (errorMessage) => {
  console.log(errorMessage);
});
