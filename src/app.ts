import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import passportConfig from "./config/passport";

// Routers
import userRouter from "./routes/user";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passportConfig(passport);

// routes
app.use("/api/user", userRouter);

// Load environment variables from .env file
dotenv.config({ path: ".env" });

export default app;
