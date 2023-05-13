function getFormData(form) {
  let formData = new FormData(form);
  let sendData = {};
  formData.forEach((value, name) => {
    sendData[name] = value;
  });
  return sendData;
}

window.addEventListener("load", () => {
  let form = document.querySelector("#userRegistration");
  form.addEventListener("submit", async (event) => {
    // prevent it from submitting
    event.preventDefault();
    let sendData = getFormData(form);
    console.log(sendData);
    let { data } = await axios.post("/save-new-user", sendData);
    console.log(data);
  });
});

// HTTP ==> cache(limited GET (url)) | body (unlimited , (POST/PUT))
