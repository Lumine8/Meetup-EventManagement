import { createContext, useState } from "react";
import { Data } from "./Data";

export const DataContext = createContext();
export function DataProvider({ children }) {
  const [data, setData] = useState({ ...Data });
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
