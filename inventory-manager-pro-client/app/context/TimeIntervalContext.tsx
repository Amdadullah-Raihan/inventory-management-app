import React, { createContext, useContext, useState, ReactNode } from "react";

interface TimeIntervalContextProps {
  timeInterval: string;
  setTimeInterval: React.Dispatch<React.SetStateAction<string>>;
}

const TimeIntervalContext = createContext<TimeIntervalContextProps | undefined>(
  undefined
);

const useInterval = (): TimeIntervalContextProps => {
  const [timeInterval, setTimeInterval] = useState("weekly");

  return { timeInterval, setTimeInterval };
};

interface TimeIntervalContextProviderProps {
  children: ReactNode;
}

export const TimeIntervalContextProvider: React.FC<
  TimeIntervalContextProviderProps
> = ({ children }) => {
  return (
    <TimeIntervalContext.Provider value={useInterval()}>
      {children}
    </TimeIntervalContext.Provider>
  );
};

export const useTimeInterval = (): TimeIntervalContextProps => {
  const context = useContext(TimeIntervalContext);

  if (!context) {
    throw new Error(
      "useTimeInterval must be used within a TimeIntervalContextProvider"
    );
  }

  return context;
};
