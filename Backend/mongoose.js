const mongoose = require("mongoose")

const uri = "mongodb+srv://jaswinkumar:jaswinkumar00@user.7ieabhl.mongodb.net/"

 async function users(){
  const mongo = await  mongoose.connect(uri)
    .then(()=>console.log("connected...."))
    .catch((error)=>console.log(error.message)
    )
}


module.exports = users ;