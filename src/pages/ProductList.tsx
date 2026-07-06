import HeroSection from "../components/HeroSection";
import SingleProduct from "../components/SingleProduct";
import { getProducts } from "../data/data";
function ProductList() {
  const products = getProducts();
  return (
    <div className="max-w-4xl mx-auto shadow-2xs  ">
      <HeroSection />
      <div className="px-4 py-2 mt-13">
        <h1 className="text-sm font-semibold ">Our Products</h1>
        <div className="grid grid-cols-2 mt-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
