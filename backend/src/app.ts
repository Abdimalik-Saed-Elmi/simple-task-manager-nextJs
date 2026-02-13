import express from "express";
import cors from "cors";
import router from "./routes/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", router);

export default app;
