// import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Donation from "../Components/NavLinks/Donation";
import Statistics from "../Components/NavLinks/Statistics";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
          path: "/statistics",
          element: <Statistics></Statistics>
      },
    ],
  },
]);

export default customRoutes;
