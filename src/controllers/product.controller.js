import fs from "fs";

function getProduct(req, res) {
  const id = req.params.id;
  const productsJSON = fs.readFile("./src/models/data.json", "utf-8");
  const products = JSON.parse(productsJSON);
  const product = products.find((product) => product.id == id);
  console.log(product);
  if (product) {
    res.render("product");
  } else {
    res.render("error", {
      message: "Product not found",
    });
  }
}
function deleteProduct(req, res) {}

export default {
  getProduct: getProduct,
  deleteProduct,
};