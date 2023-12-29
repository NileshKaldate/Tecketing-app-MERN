import express, { Request, Response } from "express";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.send("Email and password is required");
    }
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!password) {
      return res.status(400).send("password is required");
    }
    res.send("Sign up user");
  }
);

export { router as signUpRouter };
