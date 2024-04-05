// /ParrillaRoca.js
"use client"
import React, { useState, useEffect } from 'react';
import QuantitySelector from '@/components/QuantitySelector';

































const ParrillaRoca = () => {

  const [selectedQuantities, setSelectedQuantities] = useState({});

  const [orderMessage, setOrderMessage] = useState('');



  useEffect(() => {
    const orderItems = Object.entries(selectedQuantities)
      .filter(([, quantity]) => quantity > 0)
      .map(([dishId, quantity]) => {
        const dish = dishes.find((d) => d.id === dishId);
        return `${dish.name} x ${quantity}`;
      });

    const calculatedOrderMessage =
      orderItems.length > 0
        ? `Tu Pedido:\n\n${orderItems.join('\n+ ')}\n\n ---> Total: $${orderItems.reduce(
            (sum, item) => sum + dishes.find((d) => d.name.includes(item.split(' x ')[0])).price * item.split(' x ')[1],
            0
          )}`
        : '';

    setOrderMessage(calculatedOrderMessage);
  }, [selectedQuantities]);




  const handleSendOrder = async () => {
    const orderItems = Object.entries(selectedQuantities)
     .filter(([, quantity]) => quantity > 0)
     .map(([dishId, quantity]) => {
      const dish = dishes.find((d) => d.id === dishId);
      return `${dish.name} x ${quantity}`;
     });
   
    const orderMessage = `Nueva Orden:\n\n${orderItems.join('\n+ ')}\n\n ---> Total: $${orderItems.reduce(
     (sum, item) => sum + dishes.find((d) => d.name.includes(item.split(' x ')[0])).price * item.split(' x ')[1],
     0
    )}`;
   

 


    try {
     const whatsappEndpoint = `https://api.whatsapp.com/send?phone=YOUR_RESTAURANT_PHONE_NUMBER&text=${encodeURIComponent(
      orderMessage
     )}`;
   
     // Open the WhatsApp endpoint in a new window or tab
     window.open(whatsappEndpoint, '_blank');
   
     // Reset the selected quantities or perform any other actions
     setSelectedQuantities({});
    } catch (error) {
     console.error('Error sending order:', error);
    }
   };
  
  
















  const handleQuantityChange = (dishId, newQuantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [dishId]: newQuantity,
    }));
  };

  const dishes = [
    {
      id: 'empanadas',
      name: 'Media Docena De Empanadas De Carne Al Horno',
      description: '6 unidades de tapa de masa fresca con carne molida, cebolla, huevo, especias.',
      price: 3000,
    },
    {
      id: 'hamburguesa',
      name: 'Hamburguesa Completa',
      description: 'Carne, queso, lechuga, tomate, huevo, bacon y salsas',
      price: 2500,
    },
    {
      id: 'gaseosa',
      name: 'Gaseosa 500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },
    {
      id: 'gaseosa 2',
      name: 'Gaseosa 2  500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },
    {
      id: 'gaseosa 3',
      name: 'Gaseosa 3 500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },
    {
      id: 'gaseosa 4',
      name: 'Gaseosa  4 500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },
    {
      id: 'gaseosa 5',
      name: 'Gaseosa  5 500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },
    {
      id: 'gaseosa 6 ',
      name: 'Gaseosa 6 500ml',
      description: 'Opciones: Coca-Cola, Sprite, Fanta',
      price: 500,
    },

  ];

  return (

    
    <main className="bg-indigo-600 flex flex-col min-h-screen rounded-xl border-8 outline-offset-2 border-slate-500 p-5">
      {/* ... */}
      <section className="flex items-center justify-center flex-wrap gap-7 mb-12">
        {dishes.map((dish) => (
          <div key={dish.id} className="mx-1">
            <button className="flex flex-col gap-1 px-2 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200 hover:bg-red-900 active:bg-indigo-700">
              <h2 className="text-left text-base mb-0.5">{dish.name}</h2>
              <h2 className="text-left text-sm mb-0.5">{dish.description}</h2>
              <div className="flex flex-row items-center justify-center gap-8 text-white">
                <p className="text-left font-bold text-2xl mb-0.5">${dish.price}</p>
                <QuantitySelector
                  className="bg-slate-950"
                  quantity={selectedQuantities[dish.id] || 0}
                  onQuantityChange={(newQuantity) => handleQuantityChange(dish.id, newQuantity)}
                />
              </div>
            </button>
          </div>
        ))}
      </section>


      {/* Display the selected quantities */}

      <div className="text-white bg-green-500 mb-5">
         
        {Object.entries(selectedQuantities).map(([dishId, quantity]) => (
          quantity > 0 && ( // Only render if quantity is greater than 0
            <p key={dishId}>
              {dishes.find((dish) => dish.id === dishId)?.name}: {quantity}
               
            </p>
            
 
             


          )
        ))}
      </div>
      
 
      {orderMessage && (
        <div className="flex flex-col bg-white rounded-md shadow-md p-5 mt-auto">
          {/* Order Message */}
          <div className="mb-2 text-red">
            <pre className="  text-red ">{orderMessage}</pre>
          </div>
          {/* Conditionally Render Send Order Button */}
          {Object.values(selectedQuantities).some((quantity) => quantity > 0) && (
            <button
              onClick={handleSendOrder}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full" // Set full width
            >
              Send Order
            </button>
          )}
        </div>
      )}







    </main>
  );
};

export default ParrillaRoca;