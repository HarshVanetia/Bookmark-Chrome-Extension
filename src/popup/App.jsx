import React from "react";
import "./index.css";
import logo from "../assets/torch.png";
import BookMark from "./components/BookMark";
import InfoTab from "./components/InfoTab";

const App = () => {
    return (
        <div
            style={{
                width: "400px",
                padding: "20px 40px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <img
                    src={logo}
                    className="popup-logo"
                    alt="logo"
                    height="35px"
                />
                <h1>BookMark Extension</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <InfoTab />
                <BookMark />
            </div>
        </div>
    );
};

export default App;
