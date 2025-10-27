"use client"; 
import { TaskForm } from "@/src/components/TaskForm";
import { useTasks } from "@/src/hooks/useTasks"; 
export default function Home() {
  const { tasks, addTask } = useTasks();

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">TaskTrack</h1>

        <TaskForm onAddTask={addTask} />

        <div className="mt-10 text-zinc-400">
          <h2 className="text-lg font-semibold">Minhas Tarefas:</h2>
          <pre className="mt-2 p-4 bg-zinc-800 rounded-md text-sm">

            {JSON.stringify(tasks, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}