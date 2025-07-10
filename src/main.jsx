import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {TanStackQueryProvider} from "./context/TanStackQueryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TanStackQueryProvider>
      <App />
    </TanStackQueryProvider>
  </React.StrictMode>
);
