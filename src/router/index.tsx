import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import ProductList from "../pages/ProductList";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
