import { h2, paragraph } from "./createElement.js";

function createAbout() {
  let element = document.createElement("div");

  element.appendChild(h2("About:"));

  element.appendChild(
    paragraph(
      "Welcome to The Crust House, where we blend passion and tradition to craft unforgettable pizzas. From our handcrafted dough to our signature sauces, each bite reflects our commitment to quality. But we're more than just great pizza—we're a community hub where families and friends come together to enjoy delicious meals and create lasting memories. Join us at The Crust House and experience the difference."
    )
  );

  element.appendChild(h2("Contact us:"));

  element.appendChild(
    paragraph("Address: 123 Pepperoni Lane, Doughville, NY 10001")
  );
  element.appendChild(paragraph("Phone: (555) 123-4567"));
  element.appendChild(paragraph("Email: info@crusthousepizza.com"));

  return element;
}

export { createAbout };
