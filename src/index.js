const AWS = require("aws-sdk");
exports.handler = function ({ args: data }) {
  let results = data.contactInfo;
  try {
    console.log("results:", results);
    console.log("results first name:", results.first_name);
    console.log("results last name:", results.last_name);
    console.log("results email:", results.email);
    return results;
  } catch (e) {
    throw e;
  }
};
