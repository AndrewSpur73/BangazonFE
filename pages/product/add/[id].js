import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../../api/productData';
import ProductForm from '../../../components/forms/ProductForm';

function AddProductToCart() {
  const [addProduct, setAddProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setAddProduct);
  }, [id]);

  return (<ProductForm obj={addProduct} />);
}

export default AddProductToCart;
