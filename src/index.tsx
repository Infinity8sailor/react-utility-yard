// import "./tailwind.css";
import "material-icons/iconfont/material-icons.css";
export * from "./components/index";
export * from "./hooks/index";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

const Hello = () => console.log("Jelllo...");

export { Hello };
