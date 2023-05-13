const CustomersModel = require("../model/CustomersModel");

module.exports.home = (request, response) => {
  response.render("login", {
    title: "Login  Page",
  });
};

module.exports.addUserView = (request, response) => {
  response.render("add_user", {
    title: "Registration  Page",
  });
};

module.exports.saveNewUser = async (request, response) => {
  //request.params or request.query  ===>  get/delete
  try {
    let data = request.body; // request.body ==> post/put data

    let saveData = {
      first_name: data.fName,
      middle_name: data.MName,
      last_name: data.lName,
      mobile: data.mobile,
      email: data.email,
      address: data.address,
    };

    let saveCustomer = new CustomersModel(saveData);

    let result = await saveCustomer.save();
    response.send({
      status: true,
      result: result._id,
    });
  } catch (error) {
    response.send({
      status: false,
      error: error,
    });
  }
};
