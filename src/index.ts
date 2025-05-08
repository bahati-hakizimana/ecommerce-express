import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index";
const port = 7000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send({ message: "Wellcome to API" });
});

app.use("/products", productsRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log(`API is running on port: ${port}`);
  } else {
    console.log(`not connected ${err}`);
  }
});
