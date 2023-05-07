const connect = require("./config");

module.exports.getCustomers = async () => {
  try {
    const db = await connect();
    const result = await db.collection("customers").find().toArray();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
