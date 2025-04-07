import { CheckCircle, Clock, Circle } from 'lucide-react';

interface TaskCardProps {
  nombre: string;
  estado: 'completado' | 'en progreso' | 'pendiente';
  dificultad: 'baja' | 'media' | 'alta';
  progreso: number; // 0 - 100
  onComplete?: () => void;
}

const estadoInfo = {
  completado: {
    color: 'text-green-600',
    icon: <CheckCircle className="w-4 h-4" />,
    label: 'Completado'
  },
  'en progreso': {
    color: 'text-blue-500',
    icon: <Clock className="w-4 h-4" />,
    label: 'En progreso'
  },
  pendiente: {
    color: 'text-gray-400',
    icon: <Circle className="w-4 h-4" />,
    label: 'Pendiente'
  }
};

export const TaskCard = ({ nombre, estado, dificultad, progreso, onComplete }: TaskCardProps) => {
  const estadoActual = estadoInfo[estado];

  const dificultadColor = {
    baja: 'bg-green-100 text-green-800',
    media: 'bg-yellow-100 text-yellow-800',
    alta: 'bg-red-100 text-red-800'
  }[dificultad];

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-sm flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{nombre}</h3>
          <span className={`text-sm flex items-center gap-1 ${estadoActual.color}`}>
            {estadoActual.icon} {estadoActual.label}
          </span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${dificultadColor}`}>
          {dificultad}
        </span>
      </div>

      <div className="mt-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <p className="text-right text-xs text-gray-500 mt-1">{progreso}%</p>
      </div>

      {/* Botón para marcar como completado */}
      {estado !== "completado" && (
        <button
          onClick={onComplete}
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm self-end"
        >
          Marcar como completada
        </button>
      )}
    </div>
  );
};
