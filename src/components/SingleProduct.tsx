import { Link } from "react-router";
import type { Product } from "../types/Product";

function SingleProduct({ product }: { product: Product }) {
  return (
    <div className="max-w-xs overflow-hidden border border-zinc-200 rounded-sm space-y-2 ">
      <img className="w-full object-cover h-64 " src={product.image} alt="" />
      <p className="text-sm px-2 text-zinc-900 font-semibold">
        {product.title}
      </p>
      <p className="text-xs px-2 text-blue-500 font-semibold">
        ${product.price}
      </p>
      <div className="px-2 space-x-2 mb-3">
        <Link
          to="/"
          className="bg-blue-600 px-2 py-1 text-xs text-white rounded-xs"
        >
          View Details
        </Link>
        <button className="bg-gray-400 cursor-pointer px-2 py-1 text-xs text-white rounded-xs">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
