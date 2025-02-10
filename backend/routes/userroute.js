import express from 'express';
import { Login,Register,Logout } from "../controllers/user.js"; // Ensure correct import

const router = express.Router();

// Define POST route for user registration
router.route("/register").post(Register);

router.route("/login").post(Login);

router.route("/logout").get(Logout);

export default router;
