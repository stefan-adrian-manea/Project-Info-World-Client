import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppointmentServiceProvider } from "./context/AppointmentServiceContext/AppointmentServiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppointmentServiceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppointmentServiceProvider>
  </React.StrictMode>
);
