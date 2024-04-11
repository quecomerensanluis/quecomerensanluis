// /carnes.js
import React from 'react';
import Link from 'next/link';

const Carnes = () => {
  return (




<main className="bg-violet-100 flex flex-col min-h-screen rounded-xl border-8 outline-offset-2 border-slate-5 00 p-5 ">




<nav class="flex flex-row items-stretch justify-center bg-blue-200 p-2 mb-2">

<div class="text-slate-800 text-base md:text-4xl font-bold mx-2"> 
  <a href="/">  
    Qué Comer en San Luis
  </a> 
  </div>

</nav>




  <div class="text-slate-800 font-bold   font-bold mx-1"> 
      <h2 class="text-center  mb-5">  
    Locales de Carnes y Parrillas
        </h2> 
  </div>

  <section class="flex items-center justify-center flex-wrap gap-7  mb-12 ">

 




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/parrilaroca.webp" />
    <h2 class="text-center  m-0.5">   Parrilla Roca</h2>
    <h2 class="text-center font-normal  text-base m-0.5">     Desde $3000 </h2>  
  </button>
  </Link>


  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/elporfiao.webp" />
    <h2 class="text-center  m-0.5">   El Porfiao</h2>
    <h2 class="text-center font-normal text-base m-0.5">  Desde $3000 </h2>
  </button>
  </Link>



  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/macchiato.webp" />
    <h2 class="text-center  mb-0.5">   Macchiato</h2>
    <h2 class="text-center font-normal text-base mb-0.5">  Desde $3000 </h2>
  </button>
  </Link>



  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/miamila.webp" />
    <h2 class="text-center  mb-0.5">   La mia Mila</h2>
    <h2 class="text-center font-normal text-base mb-0.5">  Desde $3000 </h2>
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/tambaleo.webp" />
    <h2 class="text-center  mb-0.5">   Tambaleo</h2>
    <h2 class="text-center font-normal text-base mb-0.5">  Desde $3000 </h2>
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/vaquita.webp" />
    <h2 class="text-center  mb-0.5">   La Vaquita</h2>
    <h2 class="text-center font-normal text-base mb-0.5">  Desde $3000 </h2>
  </button>
  </Link>




  <Link href="/carnes/parrilla_roca">
  <button  class="flex flex-col items-center gap-1 px-3 py-1 text-slate-800 font-bold duration-500 text-base md:text-xl bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="95" height="95" src="logos/carnes_parrilas/vivalamila.webp" />
    <h2 class="text-center  mb-0.5">   Viva la Mila</h2>
    <h2 class="text-center font-normal text-base mb-0.5">  Desde $3000 </h2>
  </button>
  </Link>





















  </section>










  <div class="sticky top-[100vh] bg-blue-200">

<footer class="  w-full text-slate-800  text-sm md:text-xl body-font">
  <div class="flex justify-center ">

  <div class="text-slate-800 px-7 font-bold py-4">
             Acerca de este sitio.        
  </div>


  <div class="text-slate-800 px-7 font-bold py-4">
             ¿Querés agregar tu local?        
  </div>

  <div class="text-slate-800 px-7 font-bold py-4">
             2024 - Todos los derechos reservados.        
  </div>

    
    </div>

  
  </footer >
</div>







</main>







  );
};

export default Carnes;