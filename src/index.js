// const AWS = require("aws-sdk");
exports.handler = async (event) => {
  console.log("event:", event);
  const { Records } = event;
  let contactInfo = Records[0].body;
  console.log("typeof", typeof contactInfo);
  contactInfo =
    typeof contactInfo === "string" ? JSON.parse(contactInfo) : contactInfo;
  // try {
  console.log("contactInfo:", contactInfo);
  // } catch (e) {
  //   throw e;
  // }
  console.log("first name:", contactInfo.first_name);
  return contactInfo.first_name;
};
