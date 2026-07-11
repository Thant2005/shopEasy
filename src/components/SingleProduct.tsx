import { Link } from "react-router";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

function SingleProduct({ product }: { product: Product }) {
  const { cartItems, addToCart } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="max-w-full sm:max-w-xs overflow-hidden border shadow-sm border-zinc-300 rounded-sm space-y-2 ">
      <img className="w-full object-cover h-64 " src={product.image} alt="" />
      <p className="text-sm px-2 text-zinc-900 font-semibold">
        {product.title}
      </p>
      <p className="text-sm px-2 text-blue-500 font-semibold">
        ${product.price}
      </p>
      <div className="px-2 space-x-2 mb-3">
        <Link
          to={`/${product.id}`}
          className="bg-gray-400 px-2 py-1 text-xs text-white rounded-xs"
        >
          View Details
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className="bg-blue-600 cursor-pointer px-2 py-1 text-xs text-white rounded-xs"
        >
          Add to Cart {productQuantityLabel}
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
