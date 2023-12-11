import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//

function MyApp() {
  return (
    <div>
      <h1>Custom React ! Umair Abbasi</h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherUser = "Umair Abbasi";
const anotherElement = <a href="https://google.com">Vist google</a>;
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click here to visit google",
  anotherUser
);

const anotherReactElement = React.createElement(
  "h1",
  {
    id: "my-id",
    title: "my-title",
  },
  "Hafiz Muhammad Umair Abbasi"
);

const thirdReactElement = React.createElement("img", {
  src: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  alt: "carImage",
});
ReactDOM.createRoot(document.getElementById("root")).render(
  //  <MyApp />
  // MyApp()
  // ReactElement
  // anotherElement
  // reactElement
  // anotherReactElement
  // thirdReactElement
  <App />
  // reactElement
);
