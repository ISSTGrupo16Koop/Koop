import { combineReducers } from "redux";
import { SUBJECT_SEARCH, LOG_IN, LOG_OUT, END_SEARCH } from "./actions";

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
    case LOG_IN:
      state = action.payload.user;
      return state;
    default:
      return state;
  }
}

function classroom(state = [], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

function searching(state = false, action = {}) {
  switch (action.type) {
    case SUBJECT_SEARCH:
      state = action.payload.searching;
      return state;
    case END_SEARCH:
      state = action.payload.searching;
      return state;

    default:
      return state;
  }
}

function isLogged(state = false, action = {}) {
  switch (action.type) {
    case LOG_IN:
      state = action.payload.isLogged;
      return state;
    case LOG_OUT:
      state = action.payload.logout;
      console.log(state);
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
