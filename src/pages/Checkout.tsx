import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

export function Checkout() {
  const navigate = useNavigate();
  const {
    getCartItemWithProducts,
    setUpdateQuantity,
    removeFromCart,
    getCartTotal,
    success,
  } = useCart();

  const cartItems = getCartItemWithProducts();
  const total = getCartTotal();
  const handlesubmit = () => {
    success();
    navigate("/");
  };
  return (
    <div className="mt-25 max-w-4xl mx-auto ">
      {/* Cart Items */}
      <div className="p-4 py-2 ">
        <h1 className="text- font-semibold tracking-wide mb-3">Checkout</h1>
        <div className="sm:flex gap-4">
          <div className="bg-white shadow-sm p-4 ">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 mb-3 justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.product?.image}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <div className="text-start">
                    <h1 className="text-sm font-semibold">
                      {item.product?.title}
                    </h1>
                    <p className="text-xs text-zinc-500 font-mono">
                      ${item.product?.price}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 flex flex-col items-end">
                  <div className="flex items-center gap-1 ">
                    <button
                      onClick={() =>
                        setUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="border text-xs font-semibold cursor-pointer border-zinc-300 rounded-sm px-1.25 text-center"
                    >
                      -
                    </button>
                    <p className="text-xs text-zinc-700 font-semibold  mx-2">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        setUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="border text-xs font-semibold cursor-pointer border-zinc-300 rounded-sm px-1  text-center"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-end text-sm font-semibold ">
                    ${(item.quantity * (item.product?.price ?? 0)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="border text-xs font-semibold cursor-pointer bg-zinc-500 rounded-sm px-2 py-px text-white  text-center"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className=" mt-4 sm:mt-0 min-w-40 max-w-40">
            <div className="bg-white p-3 ">
              <h2 className="text-sm font-semibold">Summary</h2>
              <div>
                <div className="flex justify-between my-3">
                  <p className="font-semibold text-zinc-400 text-xs">
                    Subtotal
                  </p>
                  <p className="text-xs font-semibold">${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between my-3">
                  <p className="font-semibold text-zinc-400 text-xs">Total</p>
                  <p className="text-xs font-semibold">${total.toFixed(2)}</p>
                </div>
                <div className="border"></div>
                <div className="flex w-full mt-2 items-center">
                  <button
                    onClick={handlesubmit}
                    className="text-sm w-full rounded-xs text-white bg-blue-600 px-3 py-1.5 cursor-pointer"
                  >
                    Place holder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
