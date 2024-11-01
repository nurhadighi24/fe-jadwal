import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
  ]);
  return <RouterProvider router={router} />;
}
