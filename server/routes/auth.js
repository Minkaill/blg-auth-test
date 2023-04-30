import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";

const router = Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Get Me
router.post("/register", getMe);

export default router;