const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

exports.handler = async (event) => {
  console.log("event:", event);
  const { Records } = event;
  let contactInfo = Records[0].body;
  contactInfo =
    typeof contactInfo === "string" ? JSON.parse(contactInfo) : contactInfo;
  const ses = new AWS.SES();
  const params = {
    Destination: {
      BccAddresses: ["michael@southwestwatches.com"],
      ToAddresses: ["aimee@southwestwatches.com", "bill@southwestwatches.com"],
    },
    Message: {
      Body: {
        Html: {
          Data: `<h1>Hello, You have a new lead!</h1><h3>Below is the contact information</h3><ul><li>First Name: ${contactInfo.first_name}</li><li>Last Name: ${contactInfo.last_name}</li><li>Phone: ${contactInfo.phone}</li><li>Email: ${contactInfo.email}</li></ul><h3>Have a great day!</h3>`,
          Charset: "utf-8",
        },
        Text: {
          Data: "You Have A New Lead! \n Here is the contact information:",
          Charset: "utf-8",
        },
      },
      Subject: {
        Data: "You have a new lead",
        Charset: "utf-8",
      },
    },
    Source: "contact@southwestwatches.com",
    ReplyToAddresses: [
      "aimee@southwestwatches.com",
      "bill@southwestwatches.com",
    ],
    ReturnPath: "michael@southwestwatches.com",
  };
  const results = await ses.sendEmail(params).promise();
  return results;
};
