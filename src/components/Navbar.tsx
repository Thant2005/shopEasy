import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { user, signOut } = useAuth();
  const { cartItems } = useCart();
  const totalquantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <nav className="fixed z-50 bg-white/30 font-sans top-0 w-full border-b border-zinc-400 shadow-sm backdrop-blur-lg ">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold cursor-pointer">
          Shop<span className="text-blue-700">Easy</span>
        </div>
        <div className="flex gap-2 text-sm text-zinc-500 ">
          <Link to={`/`} className="cursor-pointer  ">
            Home
          </Link>
          <Link to={"/checkout"} className="cursor-pointer relative">
            Cart
            <span className="absolute text-zinc-800 bottom-1.5 text-xs lett-0.5">
              {totalquantity ? totalquantity : ""}
            </span>
          </Link>
        </div>
        <div>
          {user && (
            <button
              onClick={signOut}
              className="text-sm cursor-pointer font-normal text-center text-white bg-gray-500 px-2 py-1 rounded-sm"
            >
              Logout
            </button>
          )}
          {!user && (
            <div className="space-x-2">
              <Link
                to="/login"
                className="text-sm font-normal text-center text-white bg-blue-600 px-2 py-1 rounded-sm "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-normal text-center text-white bg-gray-500 px-2 py-1 rounded-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
