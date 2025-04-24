import React, { useContext, useEffect, useState } from "react";
import ContextStore from "../context/contextStore";

const InfoTab = () => {
    const { title, setTitle, logo, setLogo, setUrl } = useContext(ContextStore);
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                setTitle(tabs[0].title || "No Title");
                setLogo(tabs[0].favIconUrl || "No Logo");
                setUrl(tabs[0].url || "No URL");
            }
        });
    });
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                gap: "20px",
            }}
        >
            <img src={logo} alt="logo" height="35px" />
            <h2
                style={{
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {title}
            </h2>
        </div>
    );
};

export default InfoTab;
