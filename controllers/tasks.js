const Task=require("../models/Task")


const getAllTasks=async (req,res)=>{ 
    try{
        const allTask=await Task.find({});
        res.status(200).json(allTask);
    }catch(err){
        res.status(500).json(err)

    }
}


const createTasks=async (req,res)=>{ 
    try{
        const createTask=await Task.create(req.body);
        res.status(200).json(createTask);
    }catch(err){
        res.status(500).json(err)

    }
    
}

const getSingleTasks=async (req,res)=>{ 
    try{
        const getsingleTask=await Task.findOne({_id:req.params.id});
        // if(!getSingleTasks){
        //     return res.status(404).json('_id:'+req.params.id+'は存在しません')
        // }
        res.status(200).json(getsingleTask);
        
    }catch(err){
        res.status(500).json(err)

    }
}
const updateTasks=async (req,res)=>{ 
    try{
        const updateTask=await Task.findOneAndUpdate({_id:req.params.id},
            req.body,{
                new: true,

        });
        res.status(200).json(updateTask);
    }catch(err){
        res.status(500).json(err)

    }
}

const deleteTasks=async (req,res)=>{ 
    try{
        const deleteTask=await Task.findOneAndDelete({_id:req.params.id},
            req.body,{
                new: true,

        });
        res.status(200).json(deleteTask);
    }catch(err){
        res.status(500).json(err)

    }
}

module.exports={
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}