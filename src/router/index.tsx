import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import Login from "../pages/Login";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
