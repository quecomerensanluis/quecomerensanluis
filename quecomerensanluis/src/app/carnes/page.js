// /carnes.js
import React from 'react';
import Link from 'next/link';

const Carnes = () => {
  return (




<main className="bg-indigo-600 flex flex-col min-h-screen rounded-xl border-8 outline-offset-2 border-slate-5 00 p-5 ">




<nav class="flex flex-row items-stretch justify-center bg-gray-800 p-4 mb-5">


  <div class="text-white font-bold mx-6"> 
    <a href="/">  
      Qué Comer en San Luis
    </a> 
    </div>

    

  </nav>

  <div class="text-white   font-bold mx-3"> 
  <h2 class="text-center  mb-5">  
        Encontra lo mejor 
        y pediles por whatsapp
    </h2> 
    </div>

  <section class="flex items-center justify-center flex-wrap gap-7  mb-12 ">

 




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/parrilaroca.webp" />
    <h2 class="text-center  mb-0.5">   Parrilla Roca</h2>
    Desde $3000
  </button>
  </Link>


  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/elporfiao.webp" />
    <h2 class="text-center  mb-0.5">   El Porfiao</h2>
    Desde $3000
  </button>
  </Link>



  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/macchiato.webp" />
    <h2 class="text-center  mb-0.5">   Macchiato</h2>
    Desde $3000
  </button>
  </Link>



  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/miamila.webp" />
    <h2 class="text-center  mb-0.5">   La mia Mila</h2>
    Desde $3000
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/tambaleo.webp" />
    <h2 class="text-center  mb-0.5">   Tambaleo</h2>
    Desde $3000
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/vaquita.webp" />
    <h2 class="text-center  mb-0.5">   La Vaquita</h2>
    Desde $3000
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-1 py-1 text-white duration-500 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/vivalamila.webp" />
    <h2 class="text-center  mb-0.5">   Viva la Mila</h2>
    Desde $3000
  </button>
  </Link>





















  </section>










  <div class="sticky top-[100vh] bg-blue-500">

<footer class="  w-full text-gray-700  body-font">
<div class="flex justify-center ">

<div class="text-slate-100 px-7 sm-text-sm  text-xl font-bold py-2">
       Acerca de este sitio.        
</div>


<div class="text-slate-100 px-7 sm-text-sm  text-xl font-bold py-2">
       ¿Querés agregar tu local?        
</div>

<div class="text-slate-100 px-7 sm-text-sm  text-xl font-bold py-2">
       2024 - Todos los derechos reservados.        
</div>


</div>


</footer >
</div>







</main>







  );
};

export default Carnes;