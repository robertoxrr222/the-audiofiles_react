import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import NotFound from "./components/pages/NorFound.jsx";

//  =================================
//  ROBERTO
//  =================================

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
