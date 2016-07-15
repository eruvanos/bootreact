require("!style!css!sass!../css/app.scss"); //Include the css file using loaders from webpack/babel

//for isomorphic-fetch
require("es6-promise").polyfill();

import ControlledCounter from "containers/controlledCounter";
import * as CounterActions from "actions/counterActions";
import ReduxThunkMiddelware from "redux-thunk";

//Get reducers and create store
import counter from "reducers/counter";

let store = Redux.createStore(
  counter,
  Redux.compose(
  Redux.applyMiddleware(
    ReduxThunkMiddelware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


//Render react app
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ControlledCounter />
  </ReactRedux.Provider>,
  document.getElementById("react")
);
store.dispatch(CounterActions.pullCounter());