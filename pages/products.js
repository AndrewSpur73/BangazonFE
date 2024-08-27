import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productData';
import ProductCard from '../components/cards/ProductCard';

function ShowProducts() {
  const [products, setProducts] = useState([]);

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {products.map((product) => {
            console.warn(product);
            return <ProductCard key={product.id} productObj={product} onUpdate={getAllProducts} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ShowProducts;
