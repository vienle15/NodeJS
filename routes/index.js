import { renderHTML } from "../views/html.js";
import { routes } from "./route.js";
export function matchRoute(path) {
  let html = "";
  routes.forEach((route) => {
    console.log(111, route.path === path);
    if (routes.path === path) {
      html = renderHTML(route.content);
    }
  });
  return html;
}
