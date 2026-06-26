const { body } = require("express-validator");

const registerRetailerValidation = [
  body("storeName").notEmpty().withMessage("Store name is required"),

  body("ownerName").notEmpty().withMessage("Owner name is required"),

  body("email").isEmail().withMessage("Invalid email"),

  body("phone").notEmpty().withMessage("Phone is required"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];

module.exports = {
  registerRetailerValidation,
};
