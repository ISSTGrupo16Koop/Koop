import { combineReducers } from "redux";
import {
  SUBJECT_SEARCH,
  INIT_PROFESSORS,
  INIT_SUBJECTS,
  LOGGED_IN,
} from "./actions";

const defaultState = { data: null, error: null };

function subject(state = [], action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
      state = action.payload.subject;
      return state;
    default:
      return state;
  }
}

function userLogged(state = [], action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      state = action.payload.user;
      return state;
    case INIT_PROFESSORS:
      state = action.payload.professors;
      return state;

    default:
      return state;
  }
}

function classroom(state = [], action = {}) {
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

function searching(state = [], action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
      state = action.payload.searching;
      console.log(state);
      return state;

    default:
      return state;
  }
}

function isLogged(state = [], action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      state = action.payload.isLogged;
      return state;

    default:
      return state;
  }
}

const GlobalState = combineReducers({
  subject,
  isLogged,
  userLogged,
  classroom,
  searching,
});
export default GlobalState;
