import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AppProvider } from "./context/AppContext";

import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/navbar.css";
import "./styles/dashboard.css";
import "./styles/pages.css";
import "./styles/components.css";
import "./styles/responsive.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AppProvider>

      <App />

    </AppProvider>

  </React.StrictMode>

);