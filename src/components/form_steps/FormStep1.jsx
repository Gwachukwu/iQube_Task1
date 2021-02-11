import React from "react";

const FormStep1 = ({step}) => {
    if (step !== 1) {
        return null;
      }

  return (
    <div className="form-inputs">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">
        Email Address<span style={{ color: "red" }}>*</span>
        <br />
        <span className="form-input_hint">
          The purchase receipt would be sent to this address
        </span>
      </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="address1">Address 1</label>
      <input type="text" name="address1" id="address1" />
      <label htmlFor="address2">Address 2</label>
      <input type="text" name="address2" id="address2" />
      <div className="sub-step1">
        <div className="lga-input">
         <label htmlFor="localGov">Local Government</label>
          <input type="text" name="localGov" id="localGov" />
        </div>
        <div className="state-input"> 
          <label htmlFor="state">State</label>
          <select name="state" id="state">
            <option value="lagos">Lagos</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormStep1;
