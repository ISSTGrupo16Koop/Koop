function communication(servlet, form) {
  const Server = "http://localhost:8080/";
  const Url = Server + servlet;
  const Data = form;

  const params = {
    headers: {
      "content-type": "aplication/json; charset=UTF-8",
    },
    body: Data,
    method: "POST",
  };
  fetch(Url, params)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
}
