
import {Router} from 'express'

const router = Router();

router.get('/', (req, res) =>{
    res.send({message:"All products"});
})

router.get('/:id', (req, res) =>{
    console.log(req.params);
    res.send({message:"Get product by id"});
})

router.post('/create', (req, res) =>{
    res.send({message:"New Product Added"});
})

router.put('/:id', (req, res) =>{
    res.send({message:"product updated"});
    console.log(req.params);
})

export default router;