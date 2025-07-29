const mongoose=require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://sachinsingh7191:${process.env.MONGODB_PASSWORD}@e-commerce.3ylphtz.mongodb.net/e-commerce_db?retryWrites=true&w=majority&appName=E-Commerce`);
        console.log("MongoDB Connected Successfully !!");
    } catch (error) {
        console.log("Error while connecting to MongoDB",error);
        process.exit(0);
    }
}

module.exports=connectDB;