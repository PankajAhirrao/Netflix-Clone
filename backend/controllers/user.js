import { user } from "../models/userModel.js"; // Assuming the user model is correct

export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(401).json({ message: "Please fill all the fields" });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                message: "User Email already exists",
                success: false,
            });
        }

        await user.create({
            fullName,
            email,
            password,
        });

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
