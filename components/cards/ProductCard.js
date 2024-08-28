import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addProductToOrder } from '../../api/orderData';

function ProductCard({ productObj, onUpdate }) {
  const addThisProduct = () => {
    if (window.confirm(`Add ${productObj.title} to your cart?`)) {
      const payload = {
        orderId: 2,
        productId: productObj.productId,
      };
      addProductToOrder(payload)
        .then(() => {
          onUpdate();
        })
        .catch((error) => {
          console.error('Error adding product to order:', error);
        });
    }
  };

  return (
    <Card className="complete-product-card" style={{ width: '22rem', margin: '20px' }}>
      <Card.Img variant="top" src={productObj.imageUrl} alt={productObj.title} style={{ height: '350px' }} />
      <Card.Body>
        <Card.Title className="card-title">{productObj.title}</Card.Title>
        <Card.Text>${productObj.price}</Card.Text>
        <Button className="user-card-button" variant="danger" onClick={addThisProduct}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    productId: PropTypes.number,
    title: PropTypes.string,
    productType: PropTypes.string,
    imageUrl: PropTypes.string,
    typeId: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number,
    sellerId: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProductCard;
