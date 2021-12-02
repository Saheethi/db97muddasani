const mongoose = require("mongoose") 
const fanSchema = mongoose.Schema({ 
    brand: {
        type: String,
        minlength: 4
    },
 types: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Fan", 
fanSchema)