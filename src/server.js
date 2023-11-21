import express from "express";
import { route } from "./routes/index.js";
import { connection } from "./DB/config.js";
import session from "express-session";
import MySQLStore2 from "express-mysql-session";

const MySQLStore = MySQLStore2(session);

const app = express();

const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ltvlhk1504###***",
  database: "project",
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

// Optionally use onReady() to get a promise that resolves when store is ready.
sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    // Something went wrong.
    console.error(error);
  });

app.listen(8080, () => {
  console.log("connecting http://localhost:8080");
});
