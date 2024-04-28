const users=require('../model/User')
const getUser=async(req,res)=>{
    const {name}=req.body
  
    const user=await users.findOne({name:name})
    res.send(user)

}

const postUser=async(req,res)=>{
   
    const {name}=req.body
    
        if( await users.findOne({name:name})){
            res.send({user:await users.findOne({name:name}),msg:'already exists'})
        }else{
            const user=new users({name:name})
            await user.save()
            res.send(user)
        }

    
}
const updateUser=async (req,res)=>{
    const user=req.params
    const name=req.body

        const foundUser=await users.findOne({name:user}).exec()
        if(!await users.findOne({name:name}).exec()){
            foundUser.name=name
            await foundUser.save()
            res.send(foundUser)
        }else{
            res.send({msg:'Username has already existed!'})
        }
        
   
}

const deleteUser=async(req,res)=>{
   const {user}=req.params
   await users.findOneAndDelete({name:user})
   res.send({msg:'Deletete sucess'})
}

module.exports={getUser,postUser,updateUser,deleteUser}