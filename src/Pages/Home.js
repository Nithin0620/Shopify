import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Products";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      if (!response.ok) {
        throw new Error("Failed to fetch products data");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center">No products Available</div>
      ) : (
        <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => (
            <Products key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
