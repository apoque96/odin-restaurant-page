function h1(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

function h2(text) {
  const element = document.createElement("h2");
  element.textContent = text;
  return element;
}

function image(imgClass, path, alt) {
  const element = document.createElement("img");
  element.classList.toggle(imgClass);
  element.src = path;
  element.alt = alt;
  return element;
}

function paragraph(text) {
  const element = document.createElement("p");
  element.textContent = text;
  return element;
}

function clear(CONTENT) {
  while (CONTENT.firstChild) {
    CONTENT.removeChild(CONTENT.lastChild);
  }
}

export { h1, h2, image, paragraph, clear };
