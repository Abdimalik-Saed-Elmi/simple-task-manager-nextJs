import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body as { title?: string };

  if (!title) {
    return res.status(400).json({ error: "title required" });
  }

  const task = await prisma.task.create({
    data: { title },
  });

  res.status(201).json(task);
};

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
    res.json(tasks);
  } catch (err) {
    console.error("GET /tasks failed:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const updateTask = async (req: Request, res: Response) => {
  const  id  = req.params.id as string;
  const { completed } = req.body as { completed?: boolean };

  const task = await prisma.task.update({
    where: { id},
    data: { completed },
  });

  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const  id  = req.params.id as string;

 const task = await prisma.task.delete({ where: { id } });

  res.status(200).json({msg: "Deleted successfully", task});
};
