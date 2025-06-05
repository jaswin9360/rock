const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:  {type: String,
    required: [true, 'Name is required'],
    minlength: [4, 'Name must be at least 4 characters long'],
    },
    ogpassword:{type:String},
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },

})

 const detail = mongoose.model("user",userSchema)

module.exports=detail