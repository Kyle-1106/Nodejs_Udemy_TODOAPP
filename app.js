const express = require("express");
const app= express();
const taskRoute=require("./routes/tasks")
const connectDB=require("./DB/connect")
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"))
const port = 4000;

//ルーティング設計
// /api/v1/tasksを共通のルーティングにして、残りはtaskRoute(=routerにひきわたす)
app.use("/api/v1/tasks",taskRoute)

//DBと接続
//非同期処理をする
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        console.log("ここまでOK");
    }catch(err){
        console.log(err);
    }
}
start();

app.listen(port, ()=> console.log("サーバが起動しました"))


