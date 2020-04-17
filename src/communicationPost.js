const communicationPost = async (servlet, param, data) => {
  const Server = "http://localhost:8080/";
  const Url = Server + servlet + "?" + param;
  const Data = data;
  const params = {
    headers: {
      "content-type": "aplication/json; charset=UTF-8",
      credentials: "include",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: Data,
    method: "Post",
    mode: "no-cors",
  };
  var response = await fetch(Url, params);
  return response;
};
export { communicationPost };
