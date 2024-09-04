import React, { useEffect, useState } from 'react';
import ProductCard from '../components/cards/ProductCard';
import { getProductsBySellerId } from '../api/productData';
import { useAuth } from '../utils/context/authContext';

function ShowSellerProducts() {
  const [sellerProducts, setSellerProducts] = useState([]);
  const { user } = useAuth();

  const getAllTheSellerProducts = async () => {
    if (user?.id) {
      try {
        const data = await getProductsBySellerId(user.id);
        setSellerProducts(data || []);
      } catch (error) {
        setSellerProducts([]);
      }
    }
  };

  useEffect(() => {
    getAllTheSellerProducts(user.id);
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {sellerProducts.map((product) => <ProductCard key={product.productId} productObj={product} onUpdate={getProductsBySellerId} />)}
        </div>
      </div>
    </>
  );
}

export default ShowSellerProducts;
