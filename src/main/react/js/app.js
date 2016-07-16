require("!style!css!sass!../css/app.scss"); //Include the css file using loaders from webpack/babel

//for isomorphic-fetch
require("es6-promise").polyfill();
import ReduxThunkMiddelware from "redux-thunk";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer, routerMiddleware} from "react-router-redux";

import ControlledCounter from "containers/controlledCounter";

import AppContainer from "components/AppContainer";
import NoMatch from "components/NoMatch";

// Get reducers and create store
import counter from "reducers/counter";

let reducers = Redux.combineReducers({
  counter,
  routing: routerReducer
});

let store = Redux.createStore(
  reducers,
  Redux.compose(
    Redux.applyMiddleware(
      ReduxThunkMiddelware,
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

const history = syncHistoryWithStore(browserHistory, store);

//Render react app
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={history}>
      <Route path="/"
             component={AppContainer}>
        <IndexRoute component={ControlledCounter}/>
        <Route path="*"
               component={NoMatch}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById("react")
);