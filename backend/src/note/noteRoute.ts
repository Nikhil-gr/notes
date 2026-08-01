import express from "express";
import { createNote } from "./noteController.js";

const noteRoute = express.Router();

noteRoute.route("/").post(createNote);

export default noteRoute;
