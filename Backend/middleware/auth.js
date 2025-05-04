const jwt = require("jsonwebtoken")

const secret_key= "abi"

const auth = (req,res)=>{
    try {
    const token= req.headers.authorization
  const pare = token
  console.log(pare)
const compare = jwt.verify(pare,secret_key)

 return res.send("welcom to dashboard",compare)}
catch(error){
    console.log(error=>error.message)
}
}


module.exports = auth