import { SOME_CONSTANT } from "../constants";  // constants haru import

const initial_state = []

export default function someReducer(state = initial_state, action) {
  switch (action.type) {
    case SOME_CONSTANT:
    return [...state,...action.payload];
    default:
      return state;
  }
}