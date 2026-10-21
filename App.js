
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./route/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Existing user routes — keep as they are
app.use(router);

app.get("/", (req, res) => {
    res.send("Backend run successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

connectDB();
