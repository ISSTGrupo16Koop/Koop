import { combineReducers } from "redux";
import { SUBJECT_SEARCH, INIT_PROFESSORS, INIT_SUBJECTS, subjectSearch} from "./actions";

const defaultState = { data: null, error: null };

function subjects(state = [], action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
     
      console.log(action.subject);
      return [
        ...state,
        {
          id: subjects[subjects.length + 1],
          subject: action.subject
        }
      ] 
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
