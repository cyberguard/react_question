export const SET_CURRENT_CLIENT_PENDING = "CLIENT:SET_CURRENT_CLIENT_PENDING";
export const SET_CURRENT_CLIENT_FULFILLED =
  "CLIENT:SET_CURRENT_CLIENT_FULFILLED";
export const SET_CURRENT_CLIENT_REJECTED = "CLIENT:SET_CURRENT_CLIENT_REJECTED";

const initial_state = {
  current_client: {
    fetching: false,
    fetched: false,
    data: {}
  }
};

export default function ClientReducer(
  state = initial_state,
  { type, payload }
) {
  switch (type) {
    case SET_CURRENT_CLIENT_PENDING:
      return {
        ...state,
        current_client: {
          fetching: true,
          fetched: false,
          data: {}
        }
      };
    case SET_CURRENT_CLIENT_FULFILLED:
      return {
        ...state,
        current_client: {
          fetching: false,
          fetched: true,
          data: payload.data
        }
      };
    default:
      return state;
  }
}
