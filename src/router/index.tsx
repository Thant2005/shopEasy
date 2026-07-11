import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import { useAuth } from "../context/AuthContext";
import Checkout from "../pages/Checkout";
import { useCart } from "../context/CartContext";

function Router() {
  const { user } = useAuth();
  const { cartItems } = useCart();
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
        {
          path: "/:id",
          element: user ? <ProductDetail /> : <Navigate to={"/login"} />,
        },
        {
          path: "/checkout",
          element:
            user && cartItems.length > 0 ? <Checkout /> : <Navigate to={"/"} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
