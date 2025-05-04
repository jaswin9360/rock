const mongoose = require("mongoose")

const uri = "mongodb://localhost:27017/rock"

 async function users(){
  const mongo = await  mongoose.connect(uri)
    .then(()=>console.log("connected...."))
    .catch(()=>console.log("error"))
}


module.exports = users ;