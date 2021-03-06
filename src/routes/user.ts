import express from "express";
const router = express.Router();

import * as userController from "../controllers/userController";

router.post("/register", userController.postRegisterUser);

router.post("/login", userController.postLoginUser);

router.put("/password", userController.putChangePassword);

export default router;
