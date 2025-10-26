const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "task_manager",
    });
    console.log("✅ Database Connected...");
    // console.log("Host:", conn.connection.host);
    // console.log("Database:", conn.connection.name);
    // console.log("Port:", conn.connection.port);
  } catch (error) {
    console.log(`Database Not Connected...\nBecause...\n${error.message}`);
  }
};

module.exports = connectToDatabase;
