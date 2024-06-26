import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
import QuizzesRoutes from "./Kanbas/quizzes/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://a5--lustrous-sprinkles-d4067e.netlify.app",
      "https://a6--lustrous-sprinkles-d4067e.netlify.app",
      "https://final--lustrous-sprinkles-d4067e.netlify.app",
      "https://lustrous-sprinkles-d4067e.netlify.app",
    ],
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
QuizzesRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
