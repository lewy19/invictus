import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./styles.css";

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
if (document.getElementById("root").hasChildNodes()) hydrateRoot(document.getElementById("root"), app);
else createRoot(document.getElementById("root")).render(app);



