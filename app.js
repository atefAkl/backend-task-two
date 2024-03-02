const forecast = require ("./data1/forecast")
const geocode = require("./data1/geocode")
// console.log(process.argv)
 const country = process.argv[2]
geocode( country , (error , data) =>
    error || forecast( data.latitude , data.longtitude , (LOC_err , LOC_data) => 
      console.log( LOC_err || LOC_data)
    )
)

 




  
  


