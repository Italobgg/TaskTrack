// src/app/page.tsx
import { TaskForm } from "@/src/components/TaskForm"; // <-- 1. Importe aqui

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">TaskTrack</h1>

        {/* 1. Área do Formulário */}
        <TaskForm /> {/* <-- 2. Use o componente aqui */}

        {/* 2. Área da Listagem (virá aqui) */}
        <p className="text-center text-zinc-400 mt-10">Lista em breve...</p>
      </div>
    </main>
  );
}