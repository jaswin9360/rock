const express = require("express")
const route = express.Router()
const {home,login,register}=require("../controller/constroller")
const auth = require("../middleware/auth")

route.get ("/home",auth,home)
route.post("/register",register)
route.post("/login",login)


module.exports = route