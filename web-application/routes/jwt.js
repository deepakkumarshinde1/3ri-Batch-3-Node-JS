let jwt = require("jsonwebtoken");
module.exports.createToken = async (data) => {
  let token = jwt.sign(data, process.env.JWT_KEY);
  return token;
};

module.exports.verifyToken = async (request, response) => {
  let { token } = request.body;
  try {
    jwt.verify(token, process.env.JWT_KEY);
    response.status(200).send({
      status: true,
    });
  } catch (err) {
    response.status(403).send({
      status: false,
    });
  }
};

module.exports.checkUserToken = async (request, response, next) => {
  let { token } = request.body;
  try {
    let data = jwt.verify(token, process.env.JWT_KEY);
    response.user = data;
    next();
  } catch (err) {
    response.status(403).send({
      status: false,
    });
    return false;
  }
};
