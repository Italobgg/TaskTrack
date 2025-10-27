"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importa a função de gerar ID
import { Task } from "@/src/types/Task";

interface UseTasksReturn {
  tasks: Task[];
  addTask: (title: string) => void;
}

export function useTasks(): UseTasksReturn {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
      createdAt: new Date(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return {
    tasks,
    addTask,
  };
}
