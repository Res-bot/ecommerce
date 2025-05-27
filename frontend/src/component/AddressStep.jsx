import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import CheckoutSteps from './Checkout'; // Adjust path if needed
import './AddressStep.css';

function AddressPage() {
  const navigate = useNavigate();

  return (
    <div className="address-page-container">
      <CheckoutSteps />
      <Card className="p-4 address-card">
        <h2 className="mb-4">Shipping Address</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="123 Main St" />
          </Form.Group>
          <Button variant="success" onClick={() => navigate('/payment')}>
            Go to Payment
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default AddressPage;
