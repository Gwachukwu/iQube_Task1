import React from "react";
import Cleave from "cleave.js/react";

const FormStep2 = ({ step }) => {
  if (step !== 2) {
    return null;
  }
  return (
    <div className="form-inputs">
      <label htmlFor="cardName">Name on Card</label>
      <input type="text" name="cardName" id="cardName" />
      <label htmlFor="cardType">Card Type</label>
      <select name="cardType" id="cardType">
        <option value="Visa">Visa</option>
      </select>
      <div className="card-numbers">
        <div className="card-number">
          <label htmlFor="cardDetails">Card Details</label>
          <Cleave
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
          />
        </div>
        <div className="card-expiry">
          <label htmlFor="expiryDate">
            Expiry Date<span style={{ color: "red" }}>*</span>
          </label>
          <Cleave
            placeholder="MM/YY"
            options={{ date: true, datePattern: ["m", "y"] }}
          />
        </div>
        <div className="card-cvv">
        <label htmlFor="cvv">CVV<span style={{ color: "red" }}>*</span></label>
      <input type="text" name="cvv" id="cvv" maxLength={3}/>
        </div>
      </div>
    </div>
  );
};

export default FormStep2;
