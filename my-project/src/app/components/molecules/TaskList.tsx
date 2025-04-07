"use client";

import { useState } from "react";
import TaskForm from "../molecules/TaskForm";
import { TaskCard } from "./TaskCard";

interface Tarea {
  nombre: string;
  dificultad: 'baja' | 'media' | 'alta';
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
}

const TaskList = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = ({ nombre, dificultad }: { nombre: string; dificultad: "baja" | "media" | "alta" }) => {
    const nuevaTarea: Tarea = {
      nombre,
      dificultad,
      estado: "pendiente",
      progreso: 0,
    };

    setTareas((prev) => [...prev, nuevaTarea]);
  };

  const marcarComoCompletada = (index: number) => {
    setTareas((prev) =>
      prev.map((tarea, i) =>
        i === index
          ? { ...tarea, estado: "completado", progreso: 100 }
          : tarea
      )
    );
  };

  return (
    <div className="p-4 w-full flex flex-col gap-4">
      {/* Cards arriba */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tareas.map((tarea, index) => (
          <TaskCard
            key={index}
            nombre={tarea.nombre}
            dificultad={tarea.dificultad}
            estado={tarea.estado}
            progreso={tarea.progreso}
            onComplete={() => marcarComoCompletada(index)} // nuevo prop
          />
        ))}
      </div>

      {/* Formulario abajo */}
      <div className="mt-4">
        <TaskForm addTask={agregarTarea} />
      </div>
    </div>
  );
};

export default TaskList;
