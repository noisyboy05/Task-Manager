"use client";
import styles from "./Siderbar.module.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>
          <Image src="/icons/dashboard.svg" alt="Dashboard" width={24} height={24} />
          Dashboard
        </li>
        <li>
          <Image src="/icons/tasks.svg" alt="Tu racha" width={24} height={24} />
          Tareas
        </li>
        <li>
          <Image src="/icons/racha.svg" alt="Racha" width={24} height={24} />
          Racha
        </li>
        <li>
          <Image src="/icons/settings.svg" alt="Ajustes" width={24} height={24} />
          Ajustes
        </li>
      </ul>
    </aside>
  );
}