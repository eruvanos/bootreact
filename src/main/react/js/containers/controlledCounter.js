import {inc, pushCounter} from "actions/counterActions";
import Counter from "components/counter";

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: () => {
      dispatch(inc());
      dispatch(pushCounter());
    }
  };
};

const ControlledCounter = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ControlledCounter;