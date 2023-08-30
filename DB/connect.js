const mongoose=require("mongoose");

const connectDB=(url)=>{
    return mongoose.connect(url)
    //非同期処理
    .then(()=>console.log("DBと接続中"))
    .catch((err)=>console.log(err))
}

module.exports=connectDB;