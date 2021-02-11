import React from 'react'

const FormStep4 = ({step}) => {
    if (step !== 4) {
        return null;
      }

    return (
        <div>
            Hello I am the last step
        </div>
    )
}

export default FormStep4
