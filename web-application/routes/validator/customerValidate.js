const joi = require("joi");

module.exports.addUser = async (request, response, next) => {
  let data = request.body;

  let schema = joi.object({
    first_name: joi.string().required().min(2),
    middle_name: joi.string().required().min(2),
    last_name: joi.string().required().min(2),
    mobile: joi.number().required(),
    email: joi.string().email().required(),
    address: joi.string().min(5).required(),
    password: joi.string().required(),
  });

  try {
    await schema.validateAsync(data);
    next();
  } catch (error) {
    response.status(400).send({
      status: false,
      error: error.details[0].message,
    });
    return false;
  }
};
