"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "./theme-toggle";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    await api.post("/tasks", { title });
    toast.success("Task created");
    setTitle("");
    loadTasks();
  };

  const toggleTask = async (task: Task) => {
    await api.patch(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    loadTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    toast.success("Deleted");
    loadTasks();
  };

  return (
    <div className="max-w-md mx-auto space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Tasks</h1>
        <ThemeToggle />
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          placeholder="New task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {/* List */}
      {loading ? (
        <div className="space-y-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : (
        tasks.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span
              className={`cursor-pointer ${
                t.completed ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleTask(t)}
            >
              {t.title}
            </span>

            <Button variant="destructive" onClick={() => deleteTask(t.id)}>
              Delete
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
