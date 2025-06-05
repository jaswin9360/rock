const express = require("express")
const route = express.Router()
const {home,login,register,home2,rename}=require("../controller/constroller")
const auth = require("../middleware/auth")

route.get ("/home",home)
route.get ("/home2",home2)
route.post("/register",register)
route.post("/login",login)
route.put("/rename",rename)


module.exports = route