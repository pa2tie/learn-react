async function loginRequest(payload) {
  const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
  let data = JSON.stringify(payload);

  let params = {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: data,
    method: "POST"
  };

  let response = await fetch(url, params);
  let json = await response.json();
  if (response.status == 200) {
    return json;
  } else {
    json.status = response.status;
    return Promise.reject(json);
  }
}

export { loginRequest };
