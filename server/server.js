import dotenv from "dotenv";
dotenv.config();

import "./config/instrument.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { clerkMiddleware } from "@clerk/express";

// Initialize Express
const app = express();

// ✅ CORS тохиргоо
const allowedOrigins = [
  "https://diplom-w3a6.vercel.app", // таны frontend origin
  "http://localhost:3000", // local хөгжүүлэлтийн үед
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// ✅ Middleware-ууд
app.use(cors(corsOptions));
app.use(express.json());
app.use(clerkMiddleware());

// ✅ Database болон Cloudinary холболт
connectDB();
await connectCloudinary();

// ✅ Sentry алдааны tracking
Sentry.setupExpressErrorHandler(app);

// ✅ Routes
app.get("/", (req, res) => res.send("API Working"));
app.get("/debug-sentry", () => {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebhooks);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
