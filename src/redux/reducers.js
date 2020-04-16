import { combineReducers } from "redux";
import { SUBJECT_SEARCH, INIT_PROFESSORS, INIT_SUBJECTS, LOGGED_IN} from "./actions";

const defaultState = { data: null, error: null };

function subjects(state = [], action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
      console.log("la recibe el reducer");
      console.log({ action });
      return [
        ...state,
        {
          id: state[state.length+1],
          subject: action.payload
        },
        console.log(state)
        
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

function isLogged(state = [isLogged], action = {} ){
  switch (action.type){

    case LOGGED_IN:
      console.log("la recibe el reducer");
      console.log(state)
      state= action.payload;
      console.log(state)
      
      return state;
    
      default: 
      return state;
  }


}

const GlobalState = combineReducers({
  subjects,
  professors,
  isLogged
});
export default GlobalState;
