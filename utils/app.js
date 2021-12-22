
//accessing geocode function
const geocode = require("./geocode");

geocode('Mumbai',(error,data)=>{
    if(error){
        console.log("Error ",error)
    }
    console.log("Latitude: "+data.latitude);
    console.log("longitude: "+data.longitude);
    console.log("Location: "+data.location);
   
})