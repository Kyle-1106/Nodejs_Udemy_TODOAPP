 const express=require("express");
 const router=express.Router();
 const {getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}=require("../controllers/tasks");

//全権取得
router.get("/",getAllTasks);
//特定のタスクを作成
router.post("/",createTasks);
//ある特定のタスクを取得
router.get("/:id",getSingleTasks)
//ある特定のタスクを更新
router.patch("/:id",updateTasks);
//ある特定のタスクを削除
router.delete("/:id",deleteTasks);

module.exports=router;