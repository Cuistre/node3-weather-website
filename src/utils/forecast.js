const request = require("request")

const forecast = (latitude, longitude, callback) => {console.log("forecast OKKK")
    const url = 'http://api.weatherstack.com/current?access_key=aad02e39624240c9388714563e07508b&query=' + longitude + ',' + latitude + '&units=m'
    request({ url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out, and the feelslike is : " + body.current.feelslike + ".\nThe degree of humidity is " + body.current.humidity)
        }
    })
}

module.exports = forecast