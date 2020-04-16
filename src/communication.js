function communication() {
  const Url = "";
  const Data = {
    name: "",
    id: 5,
  };

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
