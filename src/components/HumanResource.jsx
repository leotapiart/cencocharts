import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export const HumanResource = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Nuevo Beneficio", content: "Descuentos especiales en gimnasios locales para todos los empleados." },
    { id: 2, title: "Recordatorio", content: "La próxima semana inician las evaluaciones de desempeño." },
    { id: 3, title: "Evento", content: "Este viernes tendremos una reunión general a las 15:00 hrs." },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="h-full bg-white rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="w-5 h-5 text-indigo-600" />
        <h3 className="text-base font-semibold">Anuncios y Promociones</h3>
      </div>

      {announcements.length > 0 ? (
        <div className="animate-fade-in">
          <h4 className="text-lg font-bold text-indigo-600 mb-2">{announcements[currentIndex].title}</h4>
          <p className="text-gray-700">{announcements[currentIndex].content}</p>
        </div>
      ) : (
        <p className="text-gray-500">No hay anuncios disponibles</p>
      )}
    </div>
  );
};
