const mongoose = require("mongoose") 
const fanSchema = mongoose.Schema({ 
 brand: String, 
 types: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Fan", 
fanSchema)