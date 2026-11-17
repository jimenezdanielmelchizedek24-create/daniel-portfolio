
import express from "express";
import prisma from "../config/prisma.mjs";
import authenticateAdmin from "../middleware/auth.mjs";

const router = express.Router();

// ==========================================
// 1. PUBLIC: SUBMIT A NEW INQUIRY
// ==========================================

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof subject !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Please complete all required fields."
            });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address."
            });
        }

        const newMessage = await prisma.message.create({
            data: {
                name: name.trim(),
                email: email.trim(),
                subject: subject.trim(),
                message: message.trim()
            }
        });

        return res.status(201).json({
            success: true,
            message: "Your inquiry has been submitted successfully!",
            data: {
                id: newMessage.id,
                createdAt: newMessage.createdAt
            }
        });

    } catch (error) {
        console.error("Error submitting inquiry:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later."
        });
    }
});

// ==========================================
// 2. ADMIN: GET ALL INQUIRIES
// ==========================================

router.get("/", authenticateAdmin, async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return res.status(200).json({
            success: true,
            count: messages.length,
            data: messages
        });

    } catch (error) {
        console.error("Error fetching inquiries:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to retrieve inquiries."
        });
    }
});

// ==========================================
// 3. ADMIN: UPDATE INQUIRY STATUS
// ==========================================

router.patch("/:id", authenticateAdmin, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        if (!Number.isSafeInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid inquiry ID."
            });
        }

        const allowedStatuses = ["NEW", "READ", "ARCHIVED"];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid inquiry status."
            });
        }

        const updatedMessage = await prisma.message.update({
            where: { id },
            data: { status }
        });

        return res.status(200).json({
            success: true,
            message: "Inquiry status updated successfully.",
            data: updatedMessage
        });

    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found."
            });
        }

        console.error("Error updating inquiry:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to update inquiry."
        });
    }
});

// ==========================================
// 4. ADMIN: DELETE AN INQUIRY
// ==========================================

router.delete("/:id", authenticateAdmin, async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isSafeInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid inquiry ID."
            });
        }

        await prisma.message.delete({
            where: { id }
        });

        return res.status(200).json({
            success: true,
            message: "Inquiry deleted successfully."
        });

    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found."
            });
        }

        console.error("Error deleting inquiry:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to delete inquiry."
        });
    }
});

export default router;
