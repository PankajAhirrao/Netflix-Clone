import mongoose from 'mongoose';

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log("Mongo DB Connect Successfully!!!");
        
    }).catch((error) =>{
        console.log(error);
    })
};
export default databaseConnection;