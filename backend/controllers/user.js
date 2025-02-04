import { user } from "../models/userModel";

const Resgister = async (req, res) => {
    try {
        const {fullName,email,password} = req.body;
       if(!fullName || !email || !password){
           return res.status(401).json({message: "Please fill all the fields"})
       }

       const userExists = await User.findOne({email});
       if(user){
           return res.status(401).json({message: "User Email already exists",
            success: false,
           })
       }

       await User.create({              //used match the schema of the model values in userModels.js
           fullName,                
           email,
           password
       });

       return res.status(201).json({message: "User registered successfully"});


    }
      catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}