import { h2, paragraph } from "./createElement.js";

function createMenu() {
  let element = document.createElement("div");

  element.appendChild(h2("Margherita"));
  element.appendChild(
    paragraph("Fresh tomato sauce, mozzarella cheese, basil leaves.")
  );

  element.appendChild(h2("Pepperoni Classic"));
  element.appendChild(
    paragraph("Tomato sauce, mozzarella cheese, pepperoni slices.")
  );

  element.appendChild(h2("BBQ Chicken"));
  element.appendChild(
    paragraph(
      " BBQ sauce, grilled chicken, red onions, mozzarella cheese, cilantro."
    )
  );

  element.appendChild(h2("Hawaiian"));
  element.appendChild(
    paragraph("Tomato sauce, ham, pineapple, mozzarella cheese.")
  );

  element.appendChild(h2("Meat Lover's"));
  element.appendChild(
    paragraph(
      "Tomato sauce, pepperoni, Italian sausage, bacon, ham, mozzarella cheese."
    )
  );
  return element;
}

export { createMenu };
