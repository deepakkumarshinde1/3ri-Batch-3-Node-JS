const CustomersModel = require("../model/CustomersModel");
const bcrypt = require("bcrypt");
module.exports.apiHome = (request, response) => {
  response.send({
    status: true,
  });
};

module.exports.addUser = async (request, response) => {
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
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
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

module.exports.removeUser = async (request, response) => {
  let { id } = request.body;
  try {
    await CustomersModel.findByIdAndRemove(id);
    response.send({
      status: true,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error: error,
    });
  }
};

module.exports.updateUser = (request, response) => {};

module.exports.getUsers = async (request, response) => {
  try {
    let result = await CustomersModel.find({}, { password: 0 });
    response.status(200).send({
      status: false,
      users: result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
