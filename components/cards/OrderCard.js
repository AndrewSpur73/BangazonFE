import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function OrderCard({ orderObj }) {
  return (
    <Card className="complete-order-card" style={{ width: '22rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title className="card-title">{orderObj.orderId}</Card.Title>
        <Card.Text>{orderObj.uid}</Card.Text>
        {orderObj.orderComplete ? (
          <Card.Text>Closed</Card.Text>
        ) : (
          <Card.Text>Current Order</Card.Text>
        )}
        {orderObj.paymentType && ( // Check if paymentType is not null
        <Card.Text>Payment Type: {orderObj.paymentType}</Card.Text>
        )}
        <Link href={`order/${orderObj.id}`} passHref>
          <Button className="user-card-button" variant="danger">VIEW DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    orderId: PropTypes.number,
    id: PropTypes.number,
    uid: PropTypes.string,
    orderComplete: PropTypes.bool,
    paymentType: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
