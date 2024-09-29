const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected DB`);
  } catch (error) {
    console.log("Error connecting to DB: ", error);
    process.exit(1);
  }
};
module.exports = connectDB;
