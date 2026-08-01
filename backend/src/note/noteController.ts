import type { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel.js";
import envConfig from "../config/config.js";
import createHttpError from "http-errors";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
      ? `${envConfig.backendUrl}/${req.file.filename}`
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlLqC1ye4XRXLUm8S0Ft5tQdapWZq-921R91KsUr2WQ&s=10";
    const { title, subtitle, description } = req.body;

    if (!title || !subtitle || !description) {
      res.status(400).json({
        message: "Please provide title, subtitle and description",
      });

      return;
    }

    await noteModel.create({
      title,
      subtitle,
      description,
      file,
    });

    res.status(201).json({
      message: "Note created!",
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "error when creating note"));
  }
};

const listNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes listed!",
      data: notes,
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "error when fetching notes"));
  }
};

const listNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const note = await noteModel.findById(id);

    if (!note) {
      return next(createHttpError(404, "Note not found"));
    }
    res.status(200).json({
      message: "Note listed!",
      data: note,
    });
  } catch (error) {
    return next(createHttpError(500, "error when fetching...."));
  }
};

const DeleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const note = await noteModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Note deleted!",
    });
  } catch (error) {
    return next(createHttpError(500, "error when fetching...."));
  }
};
export { createNote, listNotes, listNote, DeleteNote };
