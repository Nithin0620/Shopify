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
    <div>
      {loading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <div>No products Available</div>
      ) : (
        products.map((product) => <Products key={product.id} data={product} />)
      )}
    </div>
  );
};

export default Home;
