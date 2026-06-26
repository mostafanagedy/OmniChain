const authService = require("../services/auth.service");

const registerRetailer = async (req, res) => {
  const result = await authService.registerRetailer(req.body);

  res.status(201).json(result);
};

module.exports = {
  registerRetailer,
};
