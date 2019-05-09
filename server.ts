// lib/app.ts
import * as express from "express";
// Create a new express application instance
const app: express.Application = express();
// import { router } from "./routes/user";
import userRouter from "./routes/user";

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}`));

app.use("/api/user", userRouter);
