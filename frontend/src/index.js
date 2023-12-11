import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Pages from "./pages/Pages";

import NotFound from './pages/NotFound';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Login />,
    errorElement: <NotFound />
  },
  {
    path: "/dashboard",
    element: <Pages.Dashboard />
  },
  {
    path: "/profile",
    element: <Pages.Profile />
  },
  {
    path: "/products/register",
    element: <Pages.ProductsRegister />
  },
  {
    path: "/products/visualize",
    element: <Pages.ProductsVisualize />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);