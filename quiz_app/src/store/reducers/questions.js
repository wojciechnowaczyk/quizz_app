import { Types } from "../actions/questions";

const INITIAL_STATE = {
  items: [],
};

export default function questions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_QUESTIONS_SUCCESS: {
      console.log(action.payload.items);
      return {
        items: action.payload.items,
      };
    }
    default: {
      return state;
    }
  }
}
