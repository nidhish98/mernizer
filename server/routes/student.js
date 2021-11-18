import express from "express";
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);

export default router;
