"use client";

import { Task } from "@/src/types/Task";
import { Trash2 } from "lucide-react";
interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div
      className="flex items-center p-3 rounded-lg border border-zinc-700 bg-zinc-800 gap-3
                    hover:border-zinc-600 transition-colors"
    >
      {" "}
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleToggle}
        className="
          w-5 h-5 
          accent-blue-500 
          bg-zinc-900 border-zinc-600 rounded 
          focus:ring-2 focus:ring-blue-600
        "
      />
      <span
        className={`
          flex-1 text-zinc-100
          ${task.isCompleted ? "line-through text-zinc-500" : ""}
          transition-colors
        `}
      >
        {task.title}
      </span>
      <button
        onClick={handleDelete}
        className="p-1 rounded-md text-zinc-400 hover:text-red-500 hover:bg-zinc-700
                   transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Excluir tarefa"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
