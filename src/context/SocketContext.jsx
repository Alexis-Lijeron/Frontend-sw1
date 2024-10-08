import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    //const url = `https://c4maker-server.herokuapp.com/`;
    const url = 'https://backend-sw1-l844.onrender.com';
    const { socket, online } = useSocket(url);

    return (
        <SocketContext.Provider value={{socket, online}}>
            { children }
        </SocketContext.Provider>
    )
}