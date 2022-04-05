import { Types } from "../actions/questions";

const INITIAL_STATE = {
  items: [],
  error: "",
};

export default function questions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_QUESTIONS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    default: {
      return state;
    }
  }
}
