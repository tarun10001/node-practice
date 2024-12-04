const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Import mongoose
const userRoutes = require("./routes/users");

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected")) // Log successful connection
  .catch((err) => console.error("MongoDB Connection Failed:", err)); // Log errors

// API Routes
app.use("/api/users", userRoutes);

// Start the Server
app.listen(5000, () => console.log("Server running on port 5000"));
