import { createContext, useContext, useState, useMemo } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nbAdults, setNbAdults] = useState(1);
  const [nbChildrens, setNbChildrens] = useState(0);
  const [journeyRange, setJourneyRange] = useState([0, 1000]);
  const [housingRange, setHousingRange] = useState([0, 500]);
  const [entertainementRange, setEntertainementRange] = useState([0, 100]);

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
      journeyRange,
      setJourneyRange,
      housingRange,
      setHousingRange,
      entertainementRange,
      setEntertainementRange,
    }),
    [
      startDate,
      endDate,
      nbAdults,
      nbChildrens,
      journeyRange,
      housingRange,
      entertainementRange,
    ]
  );

  return (
    <HackatonContext.Provider value={value}>
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
