import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import noteRoute from "./note/noteRoute.js";

const app = express();

app.use("/api/notes", noteRoute);
app.use(globalErrorHandler);
export default app;
