const checkUser=(req,res,next)=>{
    const {user}=req.params
    if(user){
        next()

    }else{
        res.status(500).send({msg:'Error'})

    }
}
const checkIdTask=(req,res,next)=>{
    const {idTask,user}=req.params
    if(idTask && user){
        next()
    }else{
        res.status(500).send({msg:'Error'})

    }
    
}
module.exports={checkUser,checkIdTask}