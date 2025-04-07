import { useState } from "react";

interface TaskFormProps {
  addTask: ({ nombre, dificultad }: { nombre: string; dificultad: "baja" | "media" | "alta" }) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState<"baja" | "media" | "alta">("baja");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({ nombre, dificultad });
    setNombre("");
    setDificultad("baja");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2"
        required
      />
      <select
        value={dificultad}
        onChange={(e) => setDificultad(e.target.value as "baja" | "media" | "alta")}
        className="border p-2"
      >
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;
