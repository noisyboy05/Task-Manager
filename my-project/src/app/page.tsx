"use client";
import Sidebar from "./components/organisms/Slidebar/Sidebar";
import TaskList from "./components/organisms/TaskList";

export default function Home() {
  return (
    <div className="grid grid-cols-4 h-screen">
      {/* Sidebar centrado verticalmente */}
      <div className="col-span-1 flex flex-col justify-center items-center h-full border-r border-gray-800">
        <Sidebar />
      </div>

      {/* TaskList en su espacio */}
      <div className="col-span-3 flex justify-center items-center">
        <TaskList />
      </div>
    </div>
  );
}
