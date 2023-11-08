import express from "express";
import { route } from "./routes/index.js";
import { connection } from "./DB/config.js";

const app = express();

route(app);
connection.query("SELECT * FROM `users` ", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(8080, () => {
  console.log("connecting http://localhost:8080");
});
