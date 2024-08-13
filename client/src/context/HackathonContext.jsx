import { createContext, useContext, useState, useMemo } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nbAdults, setNbAdults] = useState(1);
  const [nbChildrens, setNbChildrens] = useState(0);

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
    }),
    [startDate, endDate, nbAdults, nbChildrens]
  );

  return (
    <HackatonContext.Provider value={value}>
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
