const CustomersModel = require("../model/CustomersModel");

let users = [];

module.exports.home = (request, response) => {
  response.render("index.pug", {
    menu: ["Deepak", "Amol", "Priya", "Neha"],
    title: "My 1st Pug Page",
  });
};

module.exports.about = (request, response) => {
  response.send("About Page");
};

module.exports.userList = (request, response) => {
  // response.send({
  //   users,
  // });
  let { page } = request.params;
  // page ==> 3
  let perPage = 10;
  page -= 1;
  let startNumber = page * perPage; //20
  let endNumber = page * perPage + perPage; // 30
  let _users = users.slice(startNumber, endNumber);
  response.render("user_list", {
    users: _users,
    page: page + 1,
    totalPage: Math.ceil(users.length / perPage),
  });
};

module.exports.getUserList = async (request, response) => {
  let result = await CustomersModel.find();
  response.send(result);
};
