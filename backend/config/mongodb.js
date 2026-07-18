const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mesbaul:MesbaulHaque@cluster0.e8wo0rw.mongodb.net/todo?appName=Cluster0');
    console.log('Database Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;