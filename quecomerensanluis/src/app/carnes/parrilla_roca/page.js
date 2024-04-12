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
        ? `Tu Pedido:\n${orderItems.join('\n+ ')}\n ---> Total: $${orderItems.reduce(
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
   
    const orderMessage = `Hola, quiero hacer un pedido de:\n\n${orderItems.join('\n+ ')}\n\n ---> Total: $${orderItems.reduce(
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
      id: 'pizza-margherita',
      name: 'Pizza Margherita',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.',
      price: 1200,
      category: '🍕 Pizza',
    },
    {
      id: 'pasta-carbonara',
      name: 'Pasta Carbonara',
      description: 'Creamy pasta dish with eggs, pancetta, Parmesan cheese, and black pepper.',
      price: 1500,
      category: 'pasta',
    },
    {
      id: 'salad-caesar',
      name: 'Caesar Salad',
      description: 'Romaine lettuce with grilled chicken, croutons, Parmesan cheese, and Caesar dressing.',
      price: 800,
      category: 'salad',
    },
    {
      id: 'pizza-pepperoni',
      name: 'Pizza Pepperoni',
      description: 'Pizza with tomato sauce, mozzarella cheese, and pepperoni.',
      price: 1300,
      category: '🍕 Pizza',
    },
    {
      id: 'tiramisu',
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert made with ladyfingers, mascarpone cheese, and cocoa powder.',
      price: 800,
      category: '🍰 Dessert',
    },

    {
      id: 'pizza-margher2ita',
      name: 'Pizza Margh2erita',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.',
      price: 1200,
      category: '🍕 Pizza',
    },
    {
      id: 'pasta-carbon2ara',
      name: 'Pasta Carbo2nara',
      description: 'Creamy pasta dish with eggs, pancetta, Parmesan cheese, and black pepper.',
      price: 1500,
      category: 'pasta',
    },
    {
      id: 'salad-ca2esar',
      name: 'Caesar Sa2lad',
      description: 'Romaine lettuce with grilled chicken, croutons, Parmesan cheese, and Caesar dressing.',
      price: 800,
      category: 'salad',
    },
    {
      id: 'pizza-pepperoni2',
      name: 'Pizza Pepperon2i',
      description: 'Pizza with tomato sauce, mozzarella cheese, and pepperoni.',
      price: 1300,
      category: '🍕 Pizza',
    },
    {
      id: 'tiramisu2',
      name: 'Tiramisu2',
      description: 'Coffee-flavored Italian dessert made with ladyfingers, mascarpone cheese, and cocoa powder.',
      price: 800,
      category: '🍰 Dessert',
    },
    
  ];








  const groupDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {});









  return (

    
    <main className="bg-slate-50 flex flex-col min-h-screen rounded-xl border-8 outline-offset-2   border-slate-500 p-2">







<nav class="flex flex-row items-center justify-evenly bg-blue-100 p-2 mb-5 rounded-lg border-16">

<div class="text-slate-800 text-base md:text-4xl font-bold mx-2"> 
  <a href="/">  
    Qué Comer en San Luis
  </a> 
  </div>

  <div class="text-slate-800    font-normal mx-8"> 
<h2 >  
Parrilla Roca
  </h2> 
  </div>

</nav>




 





<section className="justify-center grid grid-cols-1 md:grid-cols-2 flex-wrap gap-2 mb-64">
  {Object.entries(groupDishes).map(([category, dishesByCategory]) => (
    <React.Fragment key={category}>
      <h2 className="text-xl font-bold mt-8  col-span-full text-slate-800">{category}</h2>
      {dishesByCategory.map((dish) => (
        <div key={dish.id} className="mx-1 mb-2 ">
          <button className="flex flex-col gap-1 px-2 py-1 text-slate-800 duration-500 bg-slate-200 rounded-lg border border-red-200 hover:bg-indigo-200 active:bg-indigo-200">
            <h2 className="text-left text-base mb-0.5">{dish.name}</h2>
            <h2 className="text-left text-sm mb-0.5">{dish.description}</h2>
            <div className="flex flex-row items-center justify-center gap-8 text-white">
              <p className="text-left font-bold text-2xl text-slate-800 mb-0.5">${dish.price}</p>
              <QuantitySelector
                className="bg-slate-950"
                quantity={selectedQuantities[dish.id] || 0}
                onQuantityChange={(newQuantity) => handleQuantityChange(dish.id, newQuantity)}
              />
            </div>
          </button>
        </div>
      ))}
    </React.Fragment>
  ))}
</section>


      {/* Display the selected quantities */}
      <section className="  mb-64">
      </section>
      
 
      {orderMessage && (
        <div className="fixed left-0 right-0 bottom-0 flex flex-col flex-wrap bg-blue-100 rounded-md shadow-md p-2 mt-5">
          {/* Order Message */}
          <div className="mb-2 flex text-slate-800 text-sm items-center justify-center max-h-40 overflow-y-auto">
            <pre >{orderMessage}</pre>
          </div>
          {/* Conditionally Render Send Order Button */}
          {Object.values(selectedQuantities).some((quantity) => quantity > 0) && (
            <button
              onClick={handleSendOrder}
              className="bg-green-200 text-slate-800 font-bold   text-sm md:text-xl px-4 py-2 rounded-md hover:bg-green-400 w-full" // Set full width
            >
              Mandarles WhatsApp con mi pedido
            </button>
          )}
        </div>
      )}







    </main>
  );
};

export default ParrillaRoca;