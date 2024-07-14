// IntervalContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const IntervalContext = createContext();

export const IntervalProvider = ({ children }) => {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTick(prevTick => prevTick + 1);
        }, 22000); // 10 seconds interval

        return () => clearInterval(intervalId);
    }, []);

    return (
        <IntervalContext.Provider value={tick}>
            {children}
        </IntervalContext.Provider>
    );
};

export const useInterval = () => useContext(IntervalContext);
