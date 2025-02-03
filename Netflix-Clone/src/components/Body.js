import React from "react";
import Login from "./Login"; 
import Browse from "./Browse";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,                           //Routing
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default body;
