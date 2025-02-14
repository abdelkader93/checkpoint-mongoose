// require mongoose
const mongoose=require("mongoose");

// create  schema 
const schema=mongoose.Schema

const userSchema=new schema ({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    phone:{type:Number, required:true}
});

module.exports=User= mongoose.model("user",userSchema);
