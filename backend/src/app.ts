import express from "express";
import cors from "cors";
import router from "./routes/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", router);

app.get("/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date() });
});


export default app;
