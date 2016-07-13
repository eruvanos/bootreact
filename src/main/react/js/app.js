require("!style!css!sass!../css/app.scss"); //Include the css file using loaders from webpack/babel

import HelloWorld from "./components/hello-world";

ReactDOM.render(
  <div>
    <HelloWorld />
  </div>,
  document.getElementById("react")
);