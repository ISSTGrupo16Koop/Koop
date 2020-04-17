export const SUBJECT_SEARCH = "SUBJECT_SEARCH";
export const END_SEARCH = "END_SEARCH";
export const LOG_IN = "LOGGED_IN";
export const LOG_OUT = "LOG_OUT";

export function subjectSearch(searching, subject) {
  return { type: SUBJECT_SEARCH, payload: { searching, subject } };
}
export function logIn(isLogged, user) {
  return { type: LOG_IN, payload: { isLogged, user } };
}
export function logOut(logout) {
  return { type: LOG_OUT, payload: { logout } };
}
export function endSearch(searching) {
  return { type: END_SEARCH, payload: { searching } };
}
