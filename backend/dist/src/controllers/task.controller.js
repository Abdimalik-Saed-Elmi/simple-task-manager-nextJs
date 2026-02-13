"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
const prisma_1 = require("../lib/prisma");
const createTask = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "title required" });
    }
    const task = await prisma_1.prisma.task.create({
        data: { title },
    });
    res.status(201).json(task);
};
exports.createTask = createTask;
const getTasks = async (_req, res) => {
    try {
        const tasks = await prisma_1.prisma.task.findMany({ orderBy: { createdAt: "desc" } });
        res.json(tasks);
    }
    catch (err) {
        console.error("GET /tasks failed:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getTasks = getTasks;
const updateTask = async (req, res) => {
    const id = req.params.id;
    const { completed } = req.body;
    const task = await prisma_1.prisma.task.update({
        where: { id },
        data: { completed },
    });
    res.json(task);
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    const id = req.params.id;
    const task = await prisma_1.prisma.task.delete({ where: { id } });
    res.status(200).json({ msg: "Deleted successfully", task });
};
exports.deleteTask = deleteTask;
