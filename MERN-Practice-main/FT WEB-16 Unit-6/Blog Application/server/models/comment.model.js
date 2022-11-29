const {Schema,model} =require("mongoose");
const commentSchema = new Schema({
    msg:{
        type:String,
        required:true
    },
    blog:{
        type:Schema.Types.ObjectId,
        ref:"blog",
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required: true 
    },
    rating:{
        type: Number, 
        default: 1
    }
})
module.exports =model("comment",commentSchema);









// save only ids in followers