import React, { createContext } from "react";

export const ForumContext = createContext();

export const ForumContextProvider = ({children}) => {
    return (
        <ForumContext.Provider>
            {children}
        </ForumContext.Provider>
    )
}