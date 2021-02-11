import React from 'react'

const FormBtn = ({ step,setStep}) => {
    
    const nextStep=(e)=>{
        e.preventDefault();
        let nextStep = step + 1;
        setStep(nextStep);
        window.scrollTo(0, 0);
      }

    if (step === 4) {
        return null;
      }
    
    return (
        <div>
        <button className="btn" onClick={nextStep}>Next</button>
        <button className="btn-cancel">Cancel Payment</button>
        </div>
    )
}

export default FormBtn
