import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";

import App from "./components/App.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
