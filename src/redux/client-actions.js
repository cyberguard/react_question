import {
  SET_CURRENT_CLIENT_PENDING,
  SET_CURRENT_CLIENT_FULFILLED
} from "./client-reducer";

export function thunk_loadSelectedClient(client_uri) {
  return function(dispatch) {
    dispatch({
      type: SET_CURRENT_CLIENT_PENDING,
      payload: {
        current_client: {}
      }
    });

    // Simulate a rest call somewhere that takes some time to return the data
    // so the form has time to render
    setTimeout(function() {
      dispatch({
        type: SET_CURRENT_CLIENT_FULFILLED,
        payload: {
          data: {
            id: "22",
            name: "Jonh",
            country: "somewhere"
          }
        }
      });
    }, 3 * 1000);
  };
}
