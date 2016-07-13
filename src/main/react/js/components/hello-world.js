import Store from "../store";
import * as CounterActions from "../actions/CounterActions";

export default React.createClass({

  getInitialState(){
    return Store.getState();
  },

  componentDidMount(){
    this.componentWillUnmount = Store.subscribe(this.onStoreChange);
  },

  onStoreChange(){
    this.setState(Store.getState());
  },

  incCounter(){
    Store.dispatch(CounterActions.inc());
  },

  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <p>{this.state.i}</p>
        <button onClick={this.incCounter}>Inc</button>
      </div>);
  }
});
