/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../api/productData';

export default function ViewProduct() {
  const [productObj, setProductDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  }, [id]);

  const handleButtonClick = () => {
    router.push('/products');
  };

  return (
    <Card className="complete-product-card" style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={productObj.imageUrl} alt={productObj.title} style={{ height: '350px' }} />
      <Card.Body>
        <Card.Title className="card-title">{productObj.title}</Card.Title>
        <Card.Text>${productObj.price}</Card.Text>
        <Card.Text>{productObj.description}</Card.Text>
        <Card.Text>Quantity Available: {productObj.quantity}</Card.Text>
        <Button className="user-card-button" variant="danger" id="back-button" onClick={handleButtonClick}>Back</Button>
      </Card.Body>
    </Card>
  );
}
