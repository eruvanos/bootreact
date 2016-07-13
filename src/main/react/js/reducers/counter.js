import * as types from "../constants/ActionTypes";

const initialState = {i: 0};

export default function counter(state = initialState, action) {
  switch (action.type){ 
  case types.INCREMENT:
    return {i: state.i + 1};
  default:
    return state;
  }
}





