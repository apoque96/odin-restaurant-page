import "./style.css";
import { createHome } from "./home";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { clear } from "./createElement.js";

const CONTENT = document.getElementById("content");
document.getElementById("home").addEventListener("click", () => {
  clear(CONTENT);
  CONTENT.appendChild(createHome());
});
document.getElementById("menu").addEventListener("click", () => {
  clear(CONTENT);
  CONTENT.appendChild(createMenu());
});
document.getElementById("about").addEventListener("click", () => {
  clear(CONTENT);
  CONTENT.appendChild(createAbout());
});

CONTENT.appendChild(createHome());
