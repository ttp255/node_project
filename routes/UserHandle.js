const UserController=require('../controller/UserController')

const express=require('express')
const router=express.Router()
const {checkUser}=require('../middleware/check')
router.route('/users/:user',checkUser)
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)
    // .post(UserController.postUser)
router.post('/users',UserController.postUser)


module.exports=router

