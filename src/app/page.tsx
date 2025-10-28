"use client";

import { TaskForm } from "@/src/components/TaskForm";
import { TaskList } from "@/src/components/TaskList";
import { TaskSummary } from "@/src/components/TaskSummary";
import { useTasks } from "@/src/hooks/useTasks";

export default function Home() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">TaskTrack</h1>

        <TaskForm onAddTask={addTask} />

        <TaskSummary tasks={tasks} />

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </main>
  );
}
