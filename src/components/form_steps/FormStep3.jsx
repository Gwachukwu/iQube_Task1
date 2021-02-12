import React from "react";

const FormStep3 = ({ step }) => {
  if (step !== 3) {
    return null;
  }

  return (
    <div className="step3-container">
      <h6 className="step3-header">
        <span>Item Name</span>
        <span className="price-header">&#8358; Price</span>
      </h6>
      <div className="step3-items">
        <p>
          <span>Data science and usability</span> <span className="step3-items_price">50,000.00</span>
        </p>
        <p>
          <span>Shipping</span> <span className="step3-items_price">0.00</span>
        </p>
      </div>
      <hr />
      <p className="step3-total">
        <span>Total</span> <span>50,000.00</span>
      </p>
    </div>
  );
};

export default FormStep3;
