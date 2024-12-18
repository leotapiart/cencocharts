import { useDateTime } from "../hooks/useDataTime";
import { BirthdayTicker } from "./WeeklyBirthdays";

export const Header = () => {
  const { date, time } = useDateTime();

  return (
    <div className="h-[10%] px-2 my-2  flex justify-between items-center">
      {/*-----------------------------------------FECHA Y HORA---------------------------------------------------------------------------*/}
      <div className=" text-center pt-2 items-center text-base h-full rounded-lg px-2 text-white shadow-xl bg-gradient-to-r from-indigo-700 to-blue-400">
        {/* Hora */}
        <div className="text-5xl font-bold text-white">{time || "00:00"}</div>
        {/* Fecha */}
        <div className="text-lg font-semibold text-white">
          {date || "Cargando fecha..."}
        </div>
      </div>
      {/*-----------------------------------------LOS CUMPLEAÑOS---------------------------------------------------------------------------*/}
      <div className=" text-center text-base h-full w-[30%] rounded-lg px-2 text-white shadow-xl bg-gradient-to-r from-indigo-700 to-blue-400">
        <BirthdayTicker />
      </div>
    </div>
  );
};

// h-full bg-white rounded-lg relative flex flex-col group
