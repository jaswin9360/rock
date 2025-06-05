
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
        const userData = await detail({ username,ogpassword:password, password:harshpassword })
        userData.save();
        res.send({ message: "User Created Successfully" })
    }
    catch (err) {
        res.send(err)
    }
}


const login = async (req,res)=>{
   const {username,password}=req.body;
   
    try{
        const userExist = await detail.findOne({username})
        const details = userExist;
        console.log(details)
          console.log(details)
        if(!userExist){
          return   res.json({message:"User Not Found" })
        }
        else {
            console.log(password,details.password)
            const compare = await bcrypt.compare(password,details.password)
            if(compare){
                return  res.send({message:"Login Successfully"},compare)
            }
        else{
            return res.send({message:"password incorrect"})
        }
     }
    }
    catch(err){
        res.send(err)
    }

}
const rename = async (req,res)=>{
   const {username,password}=req.body;
   
    try{
        const userExist = await detail.findOne({username})
        const details = userExist;
        console.log(details)
        if(!userExist){
          return   res.json({message:"User Not Found" })
        }
        else {
            const harshpassword = await bcrypt.hash(password,5)
            const update = await detail.findOneAndUpdate({username},{ogpassword:password,password:harshpassword})
        return  res.send({message:"User Updated Successfully"},update)
     }
    }
    catch(err){
        res.send(err)
    }

}

 
module.exports = {home,login,register,home2,rename}