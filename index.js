import express from'express'; 
const app =express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('welcome to our server')
})
app.listen(port,()=>{
    console.log('Server is running ${port}')
})