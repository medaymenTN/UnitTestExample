import React from 'react'


const Form = (props)=>  {
const {isActive, showAlert,handleShowAlertWithParams} = props;
const handleClick = ()=> handleShowAlertWithParams('Roua');
  return (
    <div>
         <button
        id="my-btn-with-params"
        onClick={handleClick}>
           show alert with params
        </button>
        <button
        id="my-btn"
        onClick={showAlert}>
           show alert
        </button>
        {
        isActive && (
            <p data-testid='my-div'>
                hello USA !! 
            </p>
        )
        }
        </div>
  )
}

export default Form;