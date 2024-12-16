import { Cake } from "lucide-react";

export const BirthdayTicker = () => {
  const birthdays = [
    { name: "Juan Pérez", date: "03/15" },
    { name: "María García", date: "03/16" },
    { name: "Carlos López", date: "03/17" },
    { name: "Ana Martínez", date: "03/18" },
    { name: "Luis Rodriguez", date: "03/19" },
    { name: "Sofia Torres", date: "03/20" },
    { name: "Diego Sánchez", date: "03/21" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Título */}
      <div className="flex items-center gap-1">
        <Cake className="w-4 h-4" />
        <h3 className="font-semibold text-sm">CUMPLEAÑOS DEL MES</h3>
      </div>
      {/* Carrusel */}
      <div className="flex w-max animate-marquee-reverse space-x-5">
        {/* Lista original */}
        {birthdays.map((person, index) => (
          <div key={index} className="flex flex-col items-center text-center w-30">
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-base">{person.date}</p>
          </div>
        ))}
        {/* Duplicado para efecto continuo */}
        {birthdays.map((person, index) => (
          <div key={`duplicate-${index}`} className="flex flex-col items-center text-center w-40">
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-base">{person.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
