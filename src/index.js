// const AWS = require("aws-sdk");
exports.handler = async (event) => {
  console.log("event:", event);
  // try {
  console.log("body:", event.body);
  // } catch (e) {
  //   throw e;
  // }
  return JSON.stringify(event);
};
