const notFound=(req,res)=>{
    return res.status(404).send({msg:'Route not found!'})

}

const errorHandler=(err,req,res,next)=>{
    return res.status(500).send({msg:'Something went wrong!, try again later'})
}

module.exports={notFound,errorHandler}