// src/components/TaskForm.tsx
"use client"; // <--- Muito importante!

import { useState } from 'react';

export function TaskForm() {
  // 1. Estado para controlar o valor do input
  const [title, setTitle] = useState('');

  // 2. Função para lidar com o submit (por enquanto, só previne o padrão)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (!title.trim()) return; // Não adiciona se estiver vazio

    console.log("Nova tarefa:", title);
    // (Aqui, no futuro, vamos chamar a função para adicionar a tarefa)

    setTitle(''); // Limpa o input após adicionar
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="O que precisa ser feito?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-3 font-semibold bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Adicionar
      </button>
    </form>
  );
}