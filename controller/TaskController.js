const tasks=require('../model/Task')
const users=require('../model/User')

const getAllTask=async(req,res)=>{
    const {user}=req.params
    
    if(await users.findOne({name:user})){
        const foundTasks= await tasks.find({user:user})
        res.send(foundTasks)
    
    }else{
        res.status(404).send('error')
    }

}



const getTask=async(req,res)=>{
    const {idTask}=req.params
    if(idTask){
        task=await tasks.findOne({_id:idTask})
        res.send(task)
    }else{
        res.send({msg:'Not found task!'})

    }
    


    
}
const postTask=async(req,res)=>{
    const {user}=req.params
    if(!user){res.status(404).send('Errors')}
    
    const {name}=req.body
    if(name){
        const task=new tasks({
           name,
           user
        })
        await task.save()
        res.send(task)

    }else{
        res.send({msg:'Not found name'})
    }
}
const updateTask=async(req,res)=>{
    const {name}=req.body
    const {user,idTask}=req.params

    const task=await tasks.findOne({_id:idTask,user:user})
    if(task){
        if(name){
            task.name=name
            await task.save()
            res.send(task)
        }
    }else{
        res.send({msg:'Error!'})
    }
       
    
} 

const deleteTask=async(req,res)=>{
    const {idTask}=req.params
    
    await tasks.findOneAndDelete({_id:idTask})
    res.send({msg:`Delete task ${idTask} success`})
    
    
 
}



module.exports={getAllTask,getTask,postTask,updateTask,deleteTask}
