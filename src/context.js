import React, { useState, createContext } from "react";
import data from "./data";

export const Context = createContext();

export default function CP({ children }) {
    const [state,setState] = useState()
    return (
        <Context.Provider value={{ ...state}}>
            {children}
        </Context.Provider>
    );
}
