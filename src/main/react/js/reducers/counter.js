import * as types from "constants/ActionTypes";

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
  case types.INCREMENT:
    return state + 1;
  case types.SET_COUNTER:
    return action.counter;
  default:
    return state;
  }
}





