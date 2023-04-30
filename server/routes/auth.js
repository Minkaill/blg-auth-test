import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { chechAuth } from "../utils/checkAuth.js";

const router = Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Get Me
router.get("/me", chechAuth, getMe);

export default router;
