import React from "react";
import customRoutes from "./Routes/Routes.jsx";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={customRoutes} />
  </React.StrictMode>
);
