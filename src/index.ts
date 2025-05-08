import express from 'express';
const app = express();
const port = 7000;
app.get('/v1', (req, res) =>{
    res.send({message:"Hello First Api"});
})

app.post('/v1/user/create', (req, res) =>{
    res.send({message:"User created successful"});
})

app.listen(port, () =>{
    console.log(`My api is running on port: ${port}`);
})