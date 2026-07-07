import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
