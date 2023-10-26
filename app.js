import { createServer } from "http";
import url from "url";
import { renderHTML } from "./views/html.js";
import { matchRoute } from "./routes/index.js";

const server = createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  // if (pathname === "/") {
  //   res.write(renderHTML("Home"));
  // } else if (pathname === "/about") {
  //   res.write(renderHTML("About"));
  // } else if (pathname === "/news") {
  //   res.write(renderHTML("News"));
  // } else {
  //   res.write(renderHTML("Nothing"));
  // }
  res.write(matchRoute(pathname));
  res.end();
});

const PORT = 9876;
server.listen(PORT, () => {
  console.log(`Server running at http://vl-test:${PORT}`);
});
