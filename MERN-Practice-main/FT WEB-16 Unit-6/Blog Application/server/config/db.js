const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://localhost:27017/blogs");
module.exports=connection;
// mongodb+srv://muskan2507:muskan2507@cluster0.rn0rinn.mongodb.net/blogs?retryWrites=true&w=majority