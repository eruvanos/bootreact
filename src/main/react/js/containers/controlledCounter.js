import {inc} from "actions/counterActions";
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
    }
  };
};

const ControlledCounter = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ControlledCounter;