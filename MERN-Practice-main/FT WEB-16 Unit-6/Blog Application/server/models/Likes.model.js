const {Schema,model} =require("mongoose");
const likeSchema = new Schema({
    blog:{
        type:Schema.Types.ObjectId,
        ref:"blog",
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required: true 
    }
})
module.exports =model("like",likeSchema);









// save only ids in followers