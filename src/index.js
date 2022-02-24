// const AWS = require("aws-sdk");
exports.handler = async (event) => {
  console.log("event:", event);
  let { body: contactInfo } = event;
  console.log("typeof", typeof contactInfo);
  contactInfo =
    typeof contactInfo === "string" ? JSON.parse(contactInfo) : contactInfo;
  // try {
  console.log("contactInfo:", contactInfo);
  // } catch (e) {
  //   throw e;
  // }
  return contactInfo.first_name;
};
