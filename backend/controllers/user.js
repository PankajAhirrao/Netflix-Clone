import { user } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "Invalid data", success: false });
        }

        const loggedInUser = await user.findOne({ email });
        if (!loggedInUser) {
            return res.status(401).json({ message: "User not found", success: false });
        }

        const isMatch = await bcryptjs.compare(password, loggedInUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password", success: false });
        }

        const tokenData = { id: loggedInUser._id };
        const token = jwt.sign(tokenData, "abcdefghijklmnopqrstuvwxyz", { expiresIn: "1h" });

        return res.status(200)
            .cookie("token", token, { httpOnly: true })
            .json({ message: `Welcome back ${loggedInUser.fullName}`, success: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const Logout = async (req,res) =>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User Logged Out Successfully",
        success:true,
    });
}

export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ message: "User Email already exists", success: false });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);
        await user.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: "User registered successfully",
            success:true,
         });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
