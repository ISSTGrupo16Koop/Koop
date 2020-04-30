const communicationGet = async (servlet, param) => {
  const Server = "http://localhost:8080/Koopap/";
  const Url = Server + servlet + "?" + param;

  const params = {
    headers: {
      "Content-Type": "aplication/json; charset=utf-8",
      // "Access-Control-Allow-Origin": "http://localhost:3000",
      //"Access-Control-Allow-Credentials": "true",
    },
    method: "GET",
    credentials: "include",
    // mode: "cors",
  };
  var response = await fetch(Url, params);
  response = await response.json();
  return response;
};
export { communicationGet };
