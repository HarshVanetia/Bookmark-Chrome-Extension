import React from "react";
import "./index.css";
import logo from "../assets/torch.png";

const App = () => {
    return (
        <div className="popup">
            <header className="popup-header">
                <img src={logo} className="popup-logo" alt="logo" />
                <h1>Chrome Extension</h1>
            </header>
            <main>
                <p>Welcome to your Chrome Extension!</p>
                <button onClick={() => alert("Button clicked!")}>
                    Click Me
                </button>
            </main>
        </div>
    );
};

export default App;
