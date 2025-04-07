"use client";
import Sidebar from "./components/organisms/Slidebar/Sidebar";
import TaskList from "./components/molecules/TaskList";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen">
      {/* Sidebar + logo */}
      <div className="col-span-1 row-span-6 flex flex-col items-center">
        <div className="flex justify-start items-center h-1/6 p-4 w-full">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </div>
        <div className="flex-grow flex flex-col justify-start items-center">
          <Sidebar />
        </div>
      </div>

      {/* TaskList ocupa toda la parte derecha */}
      <div className="col-span-3 row-span-6 flex flex-col justify-center items-center bg-gray-100">
      <TaskList />
      </div>
    </div>
  );
}
