import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productSchema";



export async function createProduct(req:Request, res:Response){
  try{
    const [product] = await db.insert(productsTable).values(req.body).returning();
    res.status(201).json(product);
  }catch(err){
    res.status(500).send(err);
  }
}

export async function listProducts(req:Request, res:Response){
  try{
    const products = await db.select().from(productsTable);
    res.json(products);
  }catch(err){
    res.status(500).send(err);
  }
}
export async function getProductById(req:Request, res:Response){
  try{
    const product = await db.select()
  }catch(err){

    res.status(404).send(err)


  }
}

export function updateProduct(req: Request, res: Response) {
  console.log(req.params);
  res.send({ message: "Product updated" });
}

export function deleteProduct(req: Request, res: Response) {
  console.log(req.params);
  res.send({ message: "product Deleted successful" });
}
