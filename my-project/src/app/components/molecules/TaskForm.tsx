'use client'

import { useState } from 'react'

export default function TaskForm({ onAddTask }: { onAddTask: (task: any) => void }) {
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('Media')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!texto.trim()) return

    onAddTask({
      texto,
      dificultad: categoria,
      estado: 'pendiente',
    })

    setTexto('')
    setCategoria('Media')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-2xl mx-auto mt-8 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">Agregar una nueva tarea</h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-1">Contenido</label>
          <input
            type="text"
            placeholder="Escribe la tarea..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-600 mb-1">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl shadow-md text-sm transition"
      >
        Añadir tarea
      </button>
    </form>
  )
}
