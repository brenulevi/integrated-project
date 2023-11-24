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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);