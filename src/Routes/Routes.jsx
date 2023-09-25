import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Donation from "../Components/NavLinks/Donation";
import Statistics from "../Components/NavLinks/Statistics";
import Layout from "../Components/Main_Layout/Layout";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
