import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const baseUrl = import.meta.env.BASE_URL;
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg+xml";
link.href = `${baseUrl}icon.svg`;

document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
