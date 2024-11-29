import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/book"),
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("http://localhost:4000/book"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
