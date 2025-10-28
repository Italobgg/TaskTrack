"use client";

import { Task } from "@/src/types/Task";
import { useMemo } from "react";

interface TaskSummaryProps {
  tasks: Task[];
}

export function TaskSummary({ tasks }: TaskSummaryProps) {
  const completedCount = useMemo(() => {
    return tasks.filter((task) => task.isCompleted).length;
  }, [tasks]);

  const totalCount = tasks.length;

  if (totalCount === 0) {
    return null;
  }

  return (
    <div className="text-center text-zinc-400 mt-6 mb-4">
      <span className="font-semibold text-blue-400">{completedCount}</span>
      <span> de </span>
      <span className="font-semibold text-zinc-200">{totalCount}</span>
      <span> tarefas concluídas</span>
    </div>
  );
}
