import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/acceuil/",
    element: <App />,
  },
  {
    path: "/ville-details/",
    children: [
      {
        path: ":id",
        element: <App />,
      },
    ],
  },
  {
    path: "/questionnaire/",
    element: <App />,
    children: [
      {
        path: "partie1",
        element: <App />,
      },
      {
        path: "partie2",
        element: <App />,
      },
      {
        path: "partie3",
        element: <App />,
      },
      {
        path: "resultat",
        element: <App />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
