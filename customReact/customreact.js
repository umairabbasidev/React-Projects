function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  console.log(domElement);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */
  // version 2
  const domElement = document.createElement(reactElement.type);
  console.log(domElement);
  domElement.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
    console.log(prop);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");
console.log(mainContainer);

customRender(reactElement, mainContainer);
