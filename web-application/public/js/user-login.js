window.addEventListener("load", () => {
  let form = document.querySelector("#userLogin");

  form.addEventListener("submit", async (event) => {
    // prevent it from submitting
    event.preventDefault();
    let sendData = getFormData(form);
    console.log(sendData);
    let { data } = await axios.post("/make-login", sendData);
    if (data.status === true) {
      // success , warning , error, info
      Swal.fire({
        icon: "success",
        title: "Login successfully.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.assign("/dashboard");
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Message",
        text: data.message,
      });
    }
  });
});

// HTTP ==> cache(limited GET (url)) | body (unlimited , (POST/PUT))
