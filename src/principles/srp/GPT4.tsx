import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Rating } from "react-simple-star-rating";

function ProductsFilter({ filterRate, onRateChange }) {
  const handleRating = (rate) => {
    onRateChange(rate);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
  );
}

function ProductCard({ product }) {
  const onAddToCart = () => {
    // Add your addToCart function implementation here
  };

  return (
    <div className="w-56 flex flex-col items-center m-2 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg h-48"
          src={product.image}
          alt="product image"
        />
      </a>
      <div className="flex flex-col px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5 flex-1">
          {Array(parseInt(product.rating.rate))
            .fill("")
            .map((_, idx) => (
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {parseInt(product.rating.rate)}
          </span>
        </div>
        <div className="flex flex-col items-between justify-around">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={onAddToCart}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

function useFetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );

      if (response && response.data) setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return products;
}

function useFilterProducts(products, filterRate) {
  return useMemo(
    () =>
      products.filter((product) => product.rating.rate > filterRate),
    [products, filterRate]
  );
}

export function ProductList() {
  const [filterRate, setFilterRate] = useState(1);
  const products = useFetchProducts();
  const filteredProducts = useFilterProducts(products, filterRate);

  return (
    <div className="flex flex-col h-full">
      <ProductsFilter
        filterRate={filterRate}
        onRateChange={setFilterRate}
      />
      <div className="h-full flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
