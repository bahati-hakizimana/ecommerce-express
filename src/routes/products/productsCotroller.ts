import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send({ message: "All products" });
}

export function getProductById(req: Request, res: Response) {
  console.log(req.params);
  res.send({ message: "Get product by it's id" });
}

export function createProduct(req: Request, res: Response) {
  res.send({ message: "Product added successful" });
}

export function updateProduct(req: Request, res: Response) {
  console.log(req.params);
  res.send({ message: "Product updated" });
}

export function deleteProduct(req: Request, res: Response) {
  console.log(req.params);
  res.send({ message: "product Deleted successful" });
}
