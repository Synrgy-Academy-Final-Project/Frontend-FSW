// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
// import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import App from "./App";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
