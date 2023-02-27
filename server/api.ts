import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:8000" }));

app.listen(3000);
