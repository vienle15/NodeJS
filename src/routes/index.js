import productController from "../controllers/product.controller.js";

export function route(app) {
  //tat ca product xu ly o day
  //GET
  //   app.get("/product/:id", () => {});
  //POST
  app.get("/product/:id", productController.getProduct);

  app.get("/", (req, res) => {
    res.render("overview");
  });

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.get("/create-product", (req, res) => {
    res.render("create-product");
  });

  app.get("/user", (req, res) => {
    res.render("user", {
      data: [],
    });
  });
  //DELETE
  //   app.ger("/delete/:id", () => {});
}
