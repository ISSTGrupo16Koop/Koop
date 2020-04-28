const communicationGet = async (servlet, param) => {
  const Server = "http://localhost:8080/Koopap/";
  const Url = Server + servlet + "?" + param;

  const params = {
    headers: {
      "content-type": "aplication/json; charset=utf-8",
      credentials: "include",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    method: "GET",
    mode: "cors",
  };
  var response = await fetch(Url, params);
  return response;
};
export { communicationGet };
