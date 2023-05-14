function getFormData(form) {
  let formData = new FormData(form);
  let sendData = {};
  formData.forEach((value, name) => {
    sendData[name] = value;
  });
  return sendData;
}

let Alert = {
  success(text) {},
};
