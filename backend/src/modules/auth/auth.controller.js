const { z } = require("zod");
const { catchAsync } = require("../../utils/catchAsync");
const { login, registerAdmin } = require("./auth.service");

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2).max(120),
  phone: z.string().min(7).max(20),
});

const authController = {
  login: catchAsync(async (req, res) => {
    const body = loginSchema.parse(req.body);
    const result = await login(body);
    res.status(200).json(result);
  }),
  registerAdmin: catchAsync(async (req, res) => {
    const body = registerSchema.parse(req.body);
    const result = await registerAdmin(body);
    res.status(201).json(result);
  }),
};

module.exports = { authController };
