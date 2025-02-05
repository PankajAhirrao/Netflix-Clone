import express from 'express';
import { Register } from "../controllers/user.js"; // Ensure correct import

const router = express.Router();

// Define POST route for user registration
router.route("/register").post(Register);

export default router;
