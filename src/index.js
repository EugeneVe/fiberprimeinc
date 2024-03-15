import React from "react";
import ReactDOM from "react-dom/client";
import { MenuOpenProvider } from "./context/MenuOpenContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.css";
import Aos from "aos";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
Aos.init();
root.render(
    <MenuOpenProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </MenuOpenProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
