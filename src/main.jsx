import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TanStackQueryProvider } from "./context/TanStackQueryProvider.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TanStackQueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </TanStackQueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
