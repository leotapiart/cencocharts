import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Recordatorio",
      content: "No olvidar transferir pago de la cuota, cuenta Luis Corvalán.",
    },
    {
      id: 2,
      title: "Evento",
      content: "Viernes 20.12 Paseo fin de año, no olvides tu ensalada.",
    },
    {
      id: 3,
      title: "Recordatorio",
      content: "Viernes 20.12 informar hora de llegada proveedores XD PM.",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div
      className="h-full rounded-lg p-3 
bg-gradient-to-l from-cyan-400 from-0% via-blue-500 via- to-blue-900 to-"
    >
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="w-5 h-5 text-cyan-300" />
        <h3 className="text-lg font-semibold text-cyan-300">
          Anuncios y Recordatorios
        </h3>
      </div>

      {announcements.length > 0 ? (
        <div className="animate-fade-in">
          <h4 className="text-xl font-bold text-blue-400 mb-2">
            {announcements[currentIndex].title}
          </h4>
          <p className="text-white font-semibold text-2xl">
            {announcements[currentIndex].content}
          </p>
        </div>
      ) : (
        <p className="text-white">No hay anuncios disponibles</p>
      )}
    </div>
  );
};
