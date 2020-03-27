import { combineReducers } from "redux";
import { SUBJECT_SEARCH, INIT_PROFESSORS, INIT_SUBJECTS, SUBMIT} from "./actions";

const defaultState = { data: null, error: null };

function subjects(state = [], action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
      return state.map((subject, i) => {
        return {
          ...subject,
          userAnswer:
            action.payload.index === i
              ? action.payload.subject
              : subject.userAnswer
        };
      });
    case INIT_SUBJECTS:
      state = action.payload.subjects;
      return state;
    
    default:
      return state;
  }
}

function professors(state = [], action = {}) {
  switch (action.type) {
    /*
    case ADD_SUBJECT:
      return state.map((subject, i) => {
        return {
          ...subject,
          userAnswer:
            action.payload.index === i
              ? action.payload.answer
              : question.userAnswer
        };
	  });
	  */
    case INIT_PROFESSORS: 
      state = action.payload.professors;
      return state;

    default:
      return state;
  }
}

const GlobalState = combineReducers({
  subjects,
  professors
});
export default GlobalState;
