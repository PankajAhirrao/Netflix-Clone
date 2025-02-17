import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema);



// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({        //mongoose.Schema is a function of mongoose
//     fullName:{
//         type: String,                           //type is a property of mongoose.Schema which is used to define the type of the field
//         required: true                          //required is a property of mongoose.                                  
//     },                                           //Schema which is used to define whether the field is required or not
//     email:{
//         type: String,                           
//         required: true,
//     },
//     password:{
//         type: String,       
//         required: true
//     },
// },{timestamps: true});                          //Schema which is used to store the time of creation and updation of the document

// export const user = mongoose.model('User', userSchema);  //mongoose.model is a function of mongoose which is used to create a model