"use client";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-48 lg:w-56 bg-white h-full flex flex-col items-start p-4">
      <ul className="space-y-4 w-full">
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
          <Image src="/icons/dashboard.svg" alt="Dashboard" width={20} height={20} />
          <span className="text-sm md:text-base">Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
          <Image src="/icons/tasks.svg" alt="Tareas" width={20} height={20} />
          <span className="text-sm md:text-base">Tareas</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
          <Image src="/icons/racha.svg" alt="Racha" width={20} height={20} />
          <span className="text-sm md:text-base">Racha</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
          <Image src="/icons/settings.svg" alt="Ajustes" width={20} height={20} />
          <span className="text-sm md:text-base">Ajustes</span>
        </li>
      </ul>
    </aside>
  );
}