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
  END_CONTRACT,
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
    case END_CONTRACT:
      console.log("estado previo",state)
      state.finished= true;
      state.rated = true;
      console.log("estado modificado",state)
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
      
      return state;
     case END_CONTRACT:
      console.log("El estado endContract es",state)
      state= action.payload.endState; 
      console.log("El estado endContract es",state)
      return state;
    default:
      return state;
  }
}

function rated(state = false, action = {}) {
  switch (action.type) {
    case RATED:
      state = action.payload.rated;
      return state;
     case END_CONTRACT:
      state= action.payload.endState; 
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
