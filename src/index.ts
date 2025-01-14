import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import videoRoutes from "./routes/videoRoutes";
import { startServer } from "./server";
const cors = require("cors");

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/videos", videoRoutes);
app.get("/status", (req, res) => {
  res.status(200).json({ status: "ok" });
});
startServer(app);
export default app;
