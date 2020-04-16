const communication = async (servlet, param) => {
  const Server = "http://localhost:8080/";
  const Url = Server + servlet + "?" + param;

  const params = {
    headers: {
      "content-type": "aplication/json; charset=UTF-8",
      credentials: "include",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    //body: Data,
    method: "GET",
  };
  var response = await fetch(Url, params);
  return response;
};
export { communication };
