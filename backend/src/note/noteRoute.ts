import express from "express";
import { createNote } from "./noteController.js";
import { multer, storage } from "../middlewares/multerMiddlewares.js";

const noteRoute = express.Router();
const upload = multer({ storage: storage });
noteRoute.route("/").post(upload.single("file"), createNote);

export default noteRoute;
