import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ContextProvider from "./context/ContextProvider";

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
