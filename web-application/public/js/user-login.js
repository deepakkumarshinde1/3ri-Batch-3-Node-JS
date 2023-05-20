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
        localStorage.setItem("fc_token", data.token);
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

  (async function () {
    let token = localStorage.getItem("fc_token");
    if (token) {
      try {
        await axios.post("/verify-token", { token });
        window.location.replace("/dashboard");
      } catch (error) {
        localStorage.removeItem("fc_token");
      }
    }
  })(); //IIFE
});

// HTTP ==> cache(limited GET (url)) | body (unlimited , (POST/PUT))
