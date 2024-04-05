// components/QuantitySelector.js
import { useState } from 'react';
import { IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';




const QuantitySelector = ({ quantity, onQuantityChange }) => {

  
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div  className="flex">
      <button onClick={handleDecrement}>  
      <IoRemoveCircleOutline size="2em" color="white" /> 
      </button>

      <span className="w-20 px-5 mx-3 text-center  "> 
      {quantity} 
      </span>

      <button onClick={handleIncrement}>
         <IoAddCircleOutline size="2em" color="white" /> 
          </button>
    </div>
  );
};

export default QuantitySelector;
