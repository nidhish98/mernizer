import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use("/students", studentRoutes);

const CONNECTION_URL =
  "MONGODB_URL"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port: ${PORT} `)
    )
  )
  .catch((err) => console.log(err.message));
