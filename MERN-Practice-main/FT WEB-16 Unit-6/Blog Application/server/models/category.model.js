const {Schema,model} =require("mongoose");
const categorySchema = new Schema({
    name:{type: String,required: true},
    blog:{
        type: Schema.Types.ObjectId
    }
   
})
module.exports =model("category",categorySchema);
// save only ids in followers