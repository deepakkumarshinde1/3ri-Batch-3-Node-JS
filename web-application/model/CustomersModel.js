// Schema of collection
// structure hoe a document will look line
const mongoose = require("mongoose");

const CustomersSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true },
  gender: { type: String, require: true },
});
// MOdel

const CustomersModel = mongoose.model("customer", CustomersSchema, "customers");
// name , schema , collectionName
module.exports = CustomersModel;
