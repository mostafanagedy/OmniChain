const User = require("../models/user.model");

const registerRetailer = async (retailerData) => {
  const { fullName, email, phone, password } = retailerData;

  const user = await User.create({
    fullName,

    email,

    phone,

    password,

    role: "retailer",

    status: "pending",
  });

  return {
    success: true,

    message: "Retailer registered successfully",

    data: user,
  };
};

module.exports = {
  registerRetailer,
};
