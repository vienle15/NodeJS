import fs from "fs";

function getProduct(req, res) {
  const id = req.params.id;
  const productsJSON = fs.readFileSync("./src/models/data.json", "utf-8");
  const products = JSON.parse(productsJSON);
  const product = products.find((product) => product.id == id);
  console.log(product);
  if (product) {
    res.render("product", { data: product });
  } else {
    res.render("error", {
      message: "Product not found",
    });
  }
}
function deleteProduct(req, res) {}
function createProduct(req, res) {
  const newProduct = new product();
}
export default {
  getProduct: getProduct,
  deleteProduct,
  createProduct,
};
