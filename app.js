const express=require('express')
const app=express()
const UserHandle=require('./routes/UserHandle')
const TaskHandle=require('./routes/TaskHandle')
const port=5000
const connectDB=require('./model/Db')
const {notFound,errorHandler}=require('./middleware/errorHandle')
app.use(express.json())


//routes

app.use('/',UserHandle)
app.use('/',TaskHandle)
app.use(notFound)
app.use(errorHandler)



app.get('/',(req,res)=>{
    res.send('Task manager!')
    
    
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    connectDB()
})