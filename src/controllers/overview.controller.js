import fs from "fs";

export function getAllProducts(req, res) {
  const productsJSON = fs.readFileSync("./src/models/data.json", "utf-8");
  const products = JSON.parse(productsJSON);

  res.render("overview", { products: products });
}
