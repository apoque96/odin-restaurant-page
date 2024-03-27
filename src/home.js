import { h1, image, paragraph } from "./createElement.js";
import pizzaIcon from "./pizza.jpg";

function createHome() {
  let element = document.createElement("div");

  element.appendChild(h1("The Crust House"));
  element.appendChild(image("pizza", pizzaIcon, "pizza"));
  element.appendChild(
    paragraph(
      "Welcome to The Crust House, where tradition meets innovation in every slice. Our pizzeria blends handcrafted dough with premium toppings to create unforgettable flavors. Join us and experience the artistry of pizza-making at The Crust House."
    )
  );

  element.appendChild(paragraph("Monday-Saturday: 11:00 AM - 10:00 PM"));
  element.appendChild(paragraph("Sunday: 12:00 PM - 9:00 PM"));
  return element;
}

export { createHome };
