import React, { useState } from "react";
import ContextStore from "./contextStore";

const ContextProvider = ({ children }) => {
    const [title, setTitle] = useState("No Title");
    const [logo, setLogo] = useState("No Logo");
    const [url, setUrl] = useState("No Url");

    return (
        <>
            <ContextStore.Provider
                value={{ title, setTitle, logo, setLogo, url, setUrl }}
            >
                {children}
            </ContextStore.Provider>
        </>
    );
};

export default ContextProvider;
