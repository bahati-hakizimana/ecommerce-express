import express from 'express';
import productsRoutes from './routes/products/index'
const app = express();
const port = 7000;

app.get('/', (req, res) =>{
    res.send({message:"Wellcome to API"});
})

app.use('/products', productsRoutes);

app.listen(port, (err) =>{
    if(!err){

        console.log(`API is running on port: ${port}`);

    }else{
        console.log(`not connected ${err}` );
    }
    
})

