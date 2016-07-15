import * as types from "constants/ActionTypes";

const initialState = {counter: 0};

export default function counter(state = initialState, action) {
  switch (action.type){ 
  case types.INCREMENT:
    return {counter: state.counter + 1};
  default:
    return state;
  }
}





