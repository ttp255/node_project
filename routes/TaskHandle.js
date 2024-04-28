const express=require('express')
const router=express.Router()
const TaskController=require('../controller/TaskController')
const {checkIdTask,checkUser}=require('../middleware/check')

router.route('/users/:user/tasks',checkUser)
        .get(TaskController.getAllTask)
        .post(TaskController.postTask)

router.route('/users/:user/tasks/:idTask',checkIdTask)
        .get(TaskController.getTask)    
        .put(TaskController.updateTask)
        .delete(TaskController.deleteTask)

module.exports=router
