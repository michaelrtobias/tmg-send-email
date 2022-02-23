const AWS = require("aws-sdk");
exports.handler = function (event) {
  console.log("event:", event);
  try {
    console.log("body:", event.body);
  } catch (e) {
    throw e;
  }
  return JSON.stringify(body);
};
