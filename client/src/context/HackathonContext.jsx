import { createContext, useContext, useState, useMemo } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nbAdults, setNbAdults] = useState(1);
  const [nbChildrens, setNbChildrens] = useState(0);
  const [activity, setActivity] = useState("");
  const [climat, setClimat] = useState("");
  const [continent, setContinent] = useState("");

  const value = useMemo(
    () => ({
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      nbAdults,
      setNbAdults,
      nbChildrens,
      setNbChildrens,
      activity,
      setActivity,
      climat,
      setClimat,
      continent,
      setContinent,
    }),
    [
      startDate,
      endDate,
      nbAdults,
      nbChildrens,
      activity,
      setActivity,
      climat,
      setClimat,
      continent,
      setContinent,
    ]
  );

  return (
    <HackatonContext.Provider value={value}>
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
