
  const request = require("request")
const forecast = (latitude , longtitude , callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
    request ({url , json : true  } , (error , response) => {
    
        if (error) {
            callback ( "unable to connect weather api service" , undefined )
        } else if (response.body.error){
            callback (response.body.error.message , undefined )
        }else {
			callback (undefined ,
				"City name: " + response.body.location.name+"\n\r"+
				"Region: "+ response.body.location.region+"\n\r"+
				"Mother Country: "+response.body.location.country+"\n\r"+
				"Latitude: "+response.body.location.lat+"\n\r"+
				"Lontitude: "+response.body.location.lon+"\n\r"+
				"Time zone: "+response.body.location.tz_id+"\n\r"+
				"Local time: "+response.body.location.localtime
			)
        }
    })
      }

    module.exports = forecast

