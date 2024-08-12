import { createContext, useContext } from "react";

const HackatonContext = createContext();

export function HackatonProvider() {
  return (
    <HackatonContext.Provider>
      <h1>Context</h1>
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
