"use client";

import { useState, useEffect } from "react";
import TaskForm from "../molecules/TaskForm";
import { TaskCard } from "./TaskCard";

interface Tarea {
  nombre: string;
  dificultad: "baja" | "media" | "alta";
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
}

const TaskList = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  // Cargar tareas desde Local Storage al iniciar
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // Guardar tareas en Local Storage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = ({
    nombre,
    dificultad,
  }: {
    nombre: string;
    dificultad: "baja" | "media" | "alta";
  }) => {
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
        i === index ? { ...tarea, estado: "completado", progreso: 100 } : tarea
      )
    );
  };

  const desmarcarTarea = (index: number) => {
    setTareas((prev) =>
      prev.map((tarea, i) =>
        i === index ? { ...tarea, estado: "pendiente", progreso: 0 } : tarea
      )
    );
  };

  const eliminarTarea = (index: number) => {
    setTareas((prev) => prev.filter((_, i) => i !== index));
  };

  const editarTarea = (
    index: number,
    nuevosDatos: Partial<Pick<Tarea, "nombre" | "dificultad">>
  ) => {
    setTareas((prev) =>
      prev.map((tarea, i) =>
        i === index ? { ...tarea, ...nuevosDatos } : tarea
      )
    );
  };

  return (
    <div className="min-h-screen w-full p-6 flex flex-col justify-between">
      {/* Título arriba */}
      <div className="text-center mb-6">
        <p className="text-gray-500 italic text-sm">¡Hola!</p>
        <h2 className="text-2xl font-semibold italic">
          Tienes {tareas.length} {tareas.length === 1 ? "tarea" : "tareas"} para hoy 📝
        </h2>
      </div>

      {/* Tareas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tareas.map((tarea, index) => (
          <TaskCard
            key={index}
            nombre={tarea.nombre}
            dificultad={tarea.dificultad}
            estado={tarea.estado}
            progreso={tarea.progreso}
            onComplete={() => marcarComoCompletada(index)}
            onUndo={() => desmarcarTarea(index)}
            onDelete={() => eliminarTarea(index)}
            onEdit={(nuevosDatos) => editarTarea(index, nuevosDatos)}
          />
        ))}
      </div>

      {/* Formulario abajo */}
      <div className="w-full max-w-xl self-center pt-10">
        <TaskForm onAddTask={agregarTarea} />
      </div>
    </div>
  );
};

export default TaskList;
