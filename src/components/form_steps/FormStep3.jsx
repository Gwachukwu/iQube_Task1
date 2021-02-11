import React from 'react'

const FormStep3 = ({ step}) => {
    if (step !== 3) {
        return null;
      }

    return (
        <div>
            Hello I am the 3rd step
        </div>
    )
}

export default FormStep3
