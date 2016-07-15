require("!style!css!sass!../css/app.scss"); //Include the css file using loaders from webpack/babel

import ControlledCounter from "containers/controlledCounter";

//Get reducers and create store
import counter from "reducers/counter";
let store = Redux.createStore(counter, window.devToolsExtension ? window.devToolsExtension():null);

//Render react app
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ControlledCounter />
  </ReactRedux.Provider>,
  document.getElementById("react")
);