import { FETCH_CURRENT_SURVEY } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_SURVEY:
      return action.payload || false;
    default:
      return state;
  }
}
