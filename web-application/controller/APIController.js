const CustomersModel = require("../model/CustomersModel");

module.exports.apiHome = (request, response) => {
  response.send({
    status: true,
  });
};

module.exports.addUser = (request, response) => {};

module.exports.removeUser = (request, response) => {};

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
