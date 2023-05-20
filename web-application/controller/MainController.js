const CustomersModel = require("../model/CustomersModel");
const bcrypt = require("bcrypt");
const { createToken } = require("../routes/jwt");

// deepak
// d=eee
// e=abc
// e=abc
// p=#12
// k=987
// salt = dsfjghdjkg473865hdfjghdfjkg437
// eeeabcabc#12987dsfjghdjkg473865hdfjghdfjkg437

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

    let isUserExist = await CustomersModel.findOne({ mobile: data.mobile });
    if (isUserExist) {
      response.send({
        status: false,
        message: "Mobile number exist, Try other.",
      });
    } else {
      let password = await bcrypt.hash(data.password, 10); // gen hash password
      let saveData = {
        first_name: data.fName,
        middle_name: data.MName,
        last_name: data.lName,
        mobile: data.mobile,
        email: data.email,
        address: data.address,
        password: password,
      };
      let saveCustomer = new CustomersModel(saveData);
      let result = await saveCustomer.save();
      response.send({
        status: true,
        result: result._id,
      });
    }
  } catch (error) {
    response.send({
      status: false,
      error: error,
    });
  }
};

module.exports.makeLogin = async (request, response) => {
  try {
    let data = request.body;
    let result = await CustomersModel.findOne({
      mobile: data.username,
    });
    if (result) {
      const match = await bcrypt.compare(data.password, result.password);
      let jwt_data = {
        first_name: result.first_name,
        middle_name: result.middle_name,
        last_name: result.last_name,
        mobile: result.mobile,
        email: result.email,
        id: result._id,
      };
      let token = await createToken(jwt_data);
      if (match) {
        response.send({
          status: true,
          token,
        });
      } else {
        response.send({
          status: false,
          message: "Wrong Password",
        });
      }
    } else {
      response.send({
        status: false,
        message: "Wrong username",
      });
    }
  } catch (error) {
    response.send({
      status: false,
      error: error,
    });
  }
};
