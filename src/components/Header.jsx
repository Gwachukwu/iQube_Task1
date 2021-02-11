import React from "react";

const Header = ({ step }) => {
  if (step === 4) {
    return null;
  }

  return (
    <header>
      <h2>Complete your Purchase</h2>
      <nav>
        <ul>
          <li className={step === 1?"nav-step":""}>Personal info</li>
          <li className={step === 2?"nav-step":""}>Billing Info</li>
          <li className={step === 3?"nav-step":""}>Confirm Payment</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
