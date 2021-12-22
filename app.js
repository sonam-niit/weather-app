//accessing geocode and forecast both the functions using callbacks
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address=process.argv[2];

if(!address)
{
    console.log('please provide the address');
}
else{
    geocode(address,(error,data)=>{
        if(error)
        {
            console.log("Error "+error);
        }

        forecast(data.latitude,data.longitude, (error,fdata)=>{
            if(error){
                console.log("Error ",error)
            }

            console.log(fdata);
        })
    })
}