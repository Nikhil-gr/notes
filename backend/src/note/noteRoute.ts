import express from "express";
import {
  createNote,
  listNotes,
  listNote,
  DeleteNote,
} from "./noteController.js";
import { multer, storage } from "../middlewares/multerMiddlewares.js";

const noteRoute = express.Router();
const upload = multer({ storage: storage });
noteRoute.route("/").post(upload.single("file"), createNote).get(listNotes);

noteRoute.route("/:id").get(listNote).delete(DeleteNote);
export default noteRoute;
