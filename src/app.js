import express from "express";
import { route } from "./routes/index.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

route(app);
// app.get("/product", (req, res) => {
//   res.render("product");
// });

app.listen(9999, () => {
  console.log("connecting http://localhost:9999");
});
