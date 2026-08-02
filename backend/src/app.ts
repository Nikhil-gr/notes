import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import noteRoute from "./note/noteRoute.js";
import cors from "cors";
import envConfig from "./config/config.js";
const app = express();

//parse incoming json to handle undefined error
app.use(express.json());

//cors configuration
app.use(
  cors({
    origin: envConfig.frontendUrl,
  }),
);
app.use("/api/notes", noteRoute);

//image public
app.use(express.static("./src/uploads/"));

//error handler
app.use(globalErrorHandler);

export default app;
