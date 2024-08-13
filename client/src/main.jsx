import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HackatonProvider } from "./context/HackathonContext";

import App from "./App";
import FormPage1 from "./pages/FormPage/partie1/FormPage1";
import FormPage2 from "./pages/FormPage/partie2/FormPage2";
import Acceuil from "./pages/acceuil/Acceuil";
import FormPage3 from "./pages/FormPage/FormPage3";
import DetailCity from "./pages/detailCity/DetailCity";
import ResultatPage from "./pages/FormPage/resultat/ResultatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/acceuil/",
    element: <Acceuil />,
  },
  {
    path: "/ville-details/",
    children: [
      {
        path: ":id",
        element: <DetailCity />,
      },
    ],
  },
  {
    path: "/questionnaire/",
    children: [
      {
        path: "partie1",
        element: <FormPage1 />,
      },
      {
        path: "partie2",
        element: <FormPage2 />,
      },
      {
        path: "partie3",
        element: <FormPage3 />,
      },
      {
        path: "resultat",
        element: <ResultatPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HackatonProvider>
      <RouterProvider router={router} />
    </HackatonProvider>
  </React.StrictMode>
);
