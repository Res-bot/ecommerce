import React from 'react';
import { Card } from 'react-bootstrap';
import { CreditCard, Wallet, Banknote } from 'lucide-react';
import CheckoutSteps from './Checkout'; // Make sure path is correct
import './PaymentStep.css';

function PaymentPage() {
  return (
    <div className="payment-page-container">
      {/* Step indicator with current step = 3 handled automatically based on URL */}
      <CheckoutSteps />
      
      <Card className="p-4 payment-card">
        <h2 className="mb-4">Payment Options</h2>
        <ul className="list-unstyled payment-list">
          <li><CreditCard className="me-2" /> Credit Card</li>
          <li><Wallet className="me-2" /> Wallet</li>
          <li><Banknote className="me-2" /> Net Banking</li>
        </ul>
      </Card>
    </div>
  );
}

export default PaymentPage;
