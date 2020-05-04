import { combineReducers } from "redux";
import {
  SUBJECT_SEARCH,
  LOG_IN,
  LOG_OUT,
  END_SEARCH,
  USER_PROFESSOR,
  USER_STUDENT,
  MOSTRAR_CLASE,
  CONTRACTED,
  RATED,
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
    case LOG_IN:
      state = action.payload.user;
      console.log(state);
      return state;
    case LOG_OUT:
      state = null;
      return state;
    default:
      return state;
  }
}

function classroom(state = [], action = {}) {
  switch (action.type) {
    case MOSTRAR_CLASE:
      state = action.payload.subject;
      return state;

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
      return state;
    default:
      return state;
  }
}

function contracted(state = false, action = {}) {
  switch (action.type) {
    case CONTRACTED:
      state = action.payload.contracted;
      console.log(state);

      return state;
    default:
      return state;
  }
}

function rated(state = false, action = {}) {
  switch (action.type) {
    case RATED:
      state = action.payload.rated;
      console.log(state);
      return state;
    default:
      return state;
  }
}

function userView(state = false, action = {}) {
  switch (action.type) {
    case USER_PROFESSOR:
      state = action.payload.view;
      return state;
    case USER_STUDENT:
      state = action.payload.view;
      return state;
    default:
      return state;
  }
}

function infoClass(state = false, action = {}) {
  switch (action.type) {
    case MOSTRAR_CLASE:
      state = action.payload.infoClase;
      console.log("Variable infoClass:", state);
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
  userView,
  infoClass,
  contracted,
  rated,
});
export default GlobalState;
