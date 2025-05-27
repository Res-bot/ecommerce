import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

function CheckoutSteps() {
  const { pathname } = useLocation();

  const currentStep = (() => {
    switch (pathname) {
      case '/':
        return 1;
      case '/address':
        return 2;
      case '/payment':
        return 3;
      default:
        return 1;
    }
  })();

  return (
    <div className="checkout-steps">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div
            className={`circle ${
              step === currentStep
                ? 'active'
                : step < currentStep
                ? 'completed'
                : ''
            }`}
          >
            {step}
          </div>
          {step < 3 && (
            <div
              className={`line ${
                currentStep > step ? 'line-filled' : currentStep === step ? 'line-active' : ''
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CheckoutSteps;
