
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (
            typeof username !== "string" ||
            typeof password !== "string" ||
            !username.trim() ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required."
            });
        }

        // Check username
        if (username.trim() !== process.env.ADMIN_USERNAME) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password."
            });
        }

        // Verify password
        const passwordIsValid = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH
        );

        if (!passwordIsValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password."
            });
        }

        // Generate authentication token
        const token = jwt.sign(
            {
                role: "admin"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token
        });

    } catch (error) {
        console.error("Admin login error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to process login."
        });
    }
});

export default router;
