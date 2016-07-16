import * as types from "constants/ActionTypes";
import fetch from "isomorphic-fetch";

export function inc() {
  return {
    type: types.INCREMENT
  };
}

export function setCounter(value) {
  return {
    type: types.SET_COUNTER,
    counter: value
  };
}

//Thrunk
export function pullCounter() {
  return dispatch => {
    return fetch(
      "/api/counter", {
        headers: {
          "Authorization": "Basic " + btoa("user:user"),
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Error fetching counter from server: " + response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(setCounter(json)));
  };
}

export function pushCounter() {
  return (dispatch, getState) => {

    return fetch(
      "/api/counter", {
        method: "PUT",
        headers: {
          "Authorization": "Basic " + btoa("user:user"),
          "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(getState().counter)
      }
    )
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Error fetching counter from server: " + response.statusText);
        }
      });
  };
}


