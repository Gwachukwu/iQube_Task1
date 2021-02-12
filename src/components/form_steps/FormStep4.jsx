import React from "react";

const FormStep4 = ({ step }) => {
  if (step !== 4) {
    return null;
  }

  return (
    <div className="step4-countainer">
      <div className="step4-container_div">
          <div className="check-icon">
        <i className="check-icon"></i>
        </div>
        <h2>Purchase Completed</h2>
        <p>Please check your email for details concerning this transaction</p>
        <a href="#">Return Home</a>
      </div>
    </div>
  );
};

export default FormStep4;
