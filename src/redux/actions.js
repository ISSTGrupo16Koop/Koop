export const SUBJECT_SEARCH = "SUBJECT_SEARCH";
export const INIT_PROFESSORS = "INIT_PROFESSORS";
export const INIT_SUBJECTS = "INIT_SUBJECTS";
export const LOGGED_IN ="LOGGED_IN";


export function subjectSearch(subject) {
  console.log("se ha lanzado la accion");
  console.log({ subject });
  return { type: SUBJECT_SEARCH, payload: { subject } };
}
export function initSubjects(subjects) {
  return { type: INIT_SUBJECTS, payload: { subjects } };
}
export function initProfessors(professors) {
  return { type: INIT_PROFESSORS, payload: { professors } };
}

export function loggedIn(isLogged){
  return {type: LOGGED_IN, payload: {isLogged}};
}
