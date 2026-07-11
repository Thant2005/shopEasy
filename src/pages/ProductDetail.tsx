import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProductById } from "../data/data";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();
  const productInCart = cartItems.find((item) => item.id === product?.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  useEffect(() => {
    const foundProduct = getProductById(Number(id));
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);
  return (
    <div className="mt-25 max-w-4xl mx-auto">
      <div className=" px-4 py-6 shadow-sm md:px-10 md:py-15 flex gap-3  bg-white rounded-lg ">
        <div className=" max-w-1/2  h-auto  overflow-hidden rounded-xs">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[500ox] object-cover  "
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-bold">{product?.title}</h3>
          <p className="text-sm text-zinc-700 font-semibold">
            ${product?.price}
          </p>
          <p className="text-xs leading-tight text-zinc-600 ">
            {product?.description}
          </p>
          <div className="space-x-1">
            <button
              onClick={() => addToCart(Number(product?.id))}
              className="bg-blue-600 px-2 py-1 text-xs text-white rounded-xs"
            >
              Add to Cart {productQuantityLabel}
            </button>
            <Link
              to={"/"}
              className="bg-gray-400 px-2 py-1 text-xs text-white rounded-xs"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
