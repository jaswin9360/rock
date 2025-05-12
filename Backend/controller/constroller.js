
const bcrypt = require("bcrypt")
const detail = require("../mongodb")


 const home =async (req,res)=>{
  const user = await detail.find({},{password:1,username:1,_id:0})
   res.send(user)
}


const home2 =async (req,res)=>{
    const user = await detail.find({},{username:1,_id:0})
     res.send(user)
  }


const register = async(req,res)=>{
   const {  username, password } = req.body
    try {
        const userExist = await detail.findOne({ username:username })
        if (userExist) {
            return res.send({ message: "User Already Exist" })
        }
        const harshpassword = await bcrypt.hash(password,5)
        const userData = await detail({ username, password:harshpassword })
        userData.save();
        res.send({ message: "User Created Successfully" })
    }
    catch (err) {
        res.send(err)
    }
}


const login = async (req,res)=>{
   const {username,password}=req.body;
   console.log(username,password)
    try{
        const userExist=await detail.findOne({username,password})
        console.log(userExist)
        if(!userExist){
          return   res.json({message:"User Not Found" })
        }
        else if(password===userExist.password && username ===userExist.username){
         return res.send({message:"Login Successfully"})
     }
    
     const compare = await bcrypt.compare(detail.password,password)
     console.log(compare)
    res.send({message:"Invalid Credentials"})
     
     
    }
    catch(err){
        res.send(err)
    }

}

 
module.exports = {home,login,register,home2}