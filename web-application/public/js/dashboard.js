window.addEventListener("load", () => {
  let user = {};
  let userName = document.querySelector("#userName");
  let userMobile = document.querySelector("#userMobile");
  let userEmail = document.querySelector("#userEmail");
  let userAddress = document.querySelector("#userAddress");
  let deactivate = document.querySelector("#deactivate");

  deactivate.addEventListener("click", async () => {
    let token = localStorage.getItem("fc_token");
    if (token) {
      try {
        let { data } = await axios.post("/remove-user", { token });
        if (data.status) {
          alert("Deactivated Successfully");
          localStorage.removeItem("fc_token");
          window.location.replace("/");
        } else {
          alert("Deactivation Fail");
        }
      } catch (error) {
        alert("Server Error");
      }
    } else {
      window.location.replace("/");
    }
  });
  // onload data
  (async function () {
    let token = localStorage.getItem("fc_token");
    if (token) {
      try {
        let { data } = await axios.post("/get-user-details", { token });
        if (data.status) {
          user = data.user;
          console.log(user);
          // print values
          userName.innerHTML = `${user.first_name} ${user.middle_name} ${user.last_name}`;
          userMobile.innerHTML = user.mobile;
          userEmail.innerHTML = user.email;
          userAddress.innerHTML = user.address;
        } else {
          alert("User details not found");
          localStorage.removeItem("fc_token");
          window.location.replace("/");
        }
      } catch (error) {
        localStorage.removeItem("fc_token");
        window.location.replace("/");
      }
    } else {
      window.location.replace("/");
    }
  })(); //IIFE
});
