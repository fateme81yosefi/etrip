import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite-rtl.css";
import { DarkProvider } from "./shared/darkmode";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkProvider>
  </React.StrictMode>
);

reportWebVitals();
