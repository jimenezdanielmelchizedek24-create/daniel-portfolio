
import "dotenv/config";
import express from "express";
import cors from "cors";

import messageRoutes from "./routes/messageRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// API Health Check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Daniel Portfolio API is running!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
