const CustomersModel = require("../model/CustomersModel");

module.exports.userHomeView = (request, response) => {
  response.render("dashboard");
};

module.exports.getUserData = async (request, response) => {
  let { id } = response.user;
  try {
    let user = await CustomersModel.findById(id, { password: 0 });
    if (user) {
      response.send({
        status: true,
        user,
      });
    } else {
      response.send({
        status: false,
      });
    }
  } catch (error) {
    response.status(500).send({
      status: false,
      error: error,
    });
  }
};

module.exports.removeUser = async (request, response) => {
  let { id } = response.user;
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
