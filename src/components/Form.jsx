import React, { useState } from "react";
import FormBtn from "./FormBtn";
import FormStep1 from "./form_steps/FormStep1";
import FormStep2 from "./form_steps/FormStep2";
import FormStep3 from "./form_steps/FormStep3";
import FormStep4 from "./form_steps/FormStep4";
import Header from "./Header";

const Form = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="form-container">
    <Header step={step}/>
      <form>
        <div className="steps">
          <FormStep1 step={step}/>
          <FormStep2 step={step}/>
          <FormStep3 step={step}/>
          <FormStep4 step={step}/>
        </div>
          <FormBtn step={step} setStep={setStep}/>
      </form>
    </div>
  );
};

export default Form;
