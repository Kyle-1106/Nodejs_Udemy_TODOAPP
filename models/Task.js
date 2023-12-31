const mongoose=require("mongoose")

const TaskShema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"タスク名は必ず入れてください"],
        trim :true,
        maxlength:[20,"タスク名は20文字以内で入力してください"],
    },
    completed:{
        type:Boolean,
        default:false,

    }
})
module.exports=mongoose.model("Task",TaskShema);