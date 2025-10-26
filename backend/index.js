const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const connectToDatabase = require("./config/dbConfig/connectDB.config");
const taskRoutes = require("./routes/task.route");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/task",taskRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port of ${PORT}`);
});
