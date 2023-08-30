// /api/v1/tasksからタスクを読み込む


const tasksDom=document.querySelector(".tasks")
const formDom=document.querySelector(".task-form")
const taskInputDom=document.querySelector(".task-input")


const showTasks= async ()=>{
    try{
        //自作のAPIを叩く
        ///api/v1/tasksにアクセスしてレスポンスの中のdata属性だけを取得する
        const {data:tasks}=await axios.get("/api/v1/tasks");
        //console.log(tasks)

        //各タスクのcompleted,_id,nameの情報を
         const allTasks=tasks.map((task) =>{
            const {completed,_id,name}=task;
             console.log(name);

             return `
        <div class="single-task">
            <h5><span>${name}</span></h5>
            <div class="task-links">
                <a href="#" class="edit-link">
                    <i class="fas fa-edit"></i>
                </a>
                <button type="button" class="delete-button">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
            

         }).join("")
         tasksDom.innerHTML=allTasks;

    }catch(err){
        console.log(err)
    }
}

showTasks();


//タスクを新規作成
formDom.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const name=taskInputDom.value;

    try {
        await axios.post("/api/v1/tasks",{name:name})
        showTasks();
    } catch (err) {
        console.log(err)
    }
})