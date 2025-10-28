"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/src/types/Task";

const TASKS_STORAGE_KEY = "tasktrack:tasks";

interface UseTasksReturn {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function useTasks(): UseTasksReturn {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
      if (storedTasks) {
        const loadedTasks = JSON.parse(storedTasks).map((task: Task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }));
        setTasks(loadedTasks);
      }
    } catch (error) {
      console.error("Falha ao carregar tarefas:", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const dataToStore = JSON.stringify(tasks);
        localStorage.setItem(TASKS_STORAGE_KEY, dataToStore);
      } catch (error) {
        console.error("Falha ao salvar tarefas:", error);
      }
    }
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
      createdAt: new Date(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
}
