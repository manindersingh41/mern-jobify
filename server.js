import express from "express";
import cors from "cors";
import connectDB from "./db/connect.js";
import "express-async-errors";
// MIDDLEWARE IMPORTS //
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import morgan from "morgan";
// ROUTES //
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
import authenticateUser from "./middleware/auth.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import dotenv from "dotenv";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

const port = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// MIDDLEWARES //
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// app.get("/", (req, res) => {
//   // throw new Error('error')
//   res.json({ msg: "welcome" });
// });

if (process.env.NODE_ENV === "production") app.use(morgan("dev"));
app.get("/api/v1", (req, res) => {
  // throw new Error('error')
  res.json({ msg: "API" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`The server is running at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
