import { Cake } from "lucide-react";

export const BirthdayTicker = () => {
  const birthdays = [
    { name: "GABRIEL URBINA", date: "24-01" },
    { name: "JOSE SANMARTIN", date: "11-02" },
    { name: "FRANCISCO", date: "11-05" },
    { name: "ANTONIO MERTIL", date: "07-07" },
    { name: "FELIPE BARROS", date: "18-08" },
    { name: "RAUL MIRANDA", date: "22-08" },
    { name: "SAMUEL MEZA", date: "19-09" },
    { name: "BRAYAN VASQUEZ", date: "09-10" },
    { name: "MANUEL BRAVO", date: "25-10" },
    { name: "PILAR CHEUQUEMAN", date: "29-10" },
    { name: "LEONEL TAPIA", date: "20-11" },
    { name: "LUIS CORVALAN", date: "27-11" },
    { name: "ANDRES ORDAZ", date: "09-11" },
    { name: "SILVIA MORA", date: "13-12" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Título */}
      <div className="flex items-center gap-1 pt-2">
        <Cake className="w-4 h-4" />
        <h3 className="font-semibold text-base">CUMPLEAÑOS DEL AÑO</h3>
      </div>
      {/* Carrusel */}
      <div
        className="flex w-max animate-marquee-reverse space-x-5"
        style={{ animationDuration: "40s" }}
      >
        {/* Lista original */}
        {birthdays.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-50"
          >
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-lg">{person.date}</p>
          </div>
        ))}
        {/* Duplicado para efecto continuo */}
        {birthdays.map((person, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex flex-col items-center text-center w-50"
          >
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-lg">{person.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
