import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shorturlRoutes from "./routes/shorturl"; // better name

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ✅ This mounts the router
app.use("/api", shorturlRoutes);

// ❌ DO NOT DO THIS: `app.use("/:id", geturl);`
// If needed, put this GET inside the router file, like:
// router.get("/:id", geturl);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
