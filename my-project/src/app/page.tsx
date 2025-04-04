"use client";
import Sidebar from "./components/organisms/Slidebar/Sidebar";
import TaskList from "./components/organisms/TaskList";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen">
      {/* Contenedor para el logo y el Sidebar */}
      <div className="col-span-1 row-span-6 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center items-center h-1/6 p-16">
          <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
        </div>

        {/* Sidebar */}
        <div className="flex-grow flex flex-col justify-start items-center">
          <Sidebar />
        </div>
      </div>

      {/* TaskList ocupando las columnas restantes */}
      <div className="col-span-3 row-span-6 flex justify-center items-center">
        <TaskList />
      </div>
    </div>
  );
}