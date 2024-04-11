import Image from "next/image";
import Link from 'next/link';




export default function Home() {
  return (
    <main className="bg-violet-100 flex flex-col min-h-screen rounded-xl border-8 outline-offset-2 border-slate-200 p-5 ">




      <nav class="flex flex-row items-stretch justify-center bg-blue-200 p-2 mb-5">

        <div class="text-slate-800 text-base md:text-4xl font-bold mx-2"> 
          <a href="/">  
            Qué Comer en San Luis
          </a> 
          </div>

        </nav>

        <div class="text-white  text-slate-800 font-bold mx-3"> 
        <h2 class="text-center  mb-5">  
              Encontra lo mejor 
              y pediles por whatsapp
          </h2> 
          </div>

        <section class="flex items-center justify-center flex-wrap gap-7  mb-12 ">



        <Link href="./carnes">
  <button className="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 font-bold text-base md:text-xl duration-500 bg-slate-200 rounded-lg border border-red-500 hover:bg-indigo-600 active:bg-indigo-700">
    <img width="45" height="45" src="carnes_lomos.png" alt="Carnes y Lomos" />
    Carnes <br /> y Lomos
  </button>
</Link>



 

<Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 font-bold   text-base md:text-xlduration-500 bg-slate-200 rounded-lg border border-red-500  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="hamburguesas.png" />
          Hamburguesas
        </button>
        </Link>

        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 font-bold text-base md:text-xl duration-500 bg-slate-200 rounded-lg border border-red-500  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="helado.png" />
          Helado
        </button>
        </Link>






        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="empanadas.png" />
          Empanadas
        </button>
        </Link>
            



        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="pizzas.png" />
          Pizzas
        </button>
        </Link>




        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl  bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="pastas.png" />
          Pastas
        </button> 
        </Link>





        <Link href="./carnes"> 
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="panaderia.png" />
          Panaderìa
        </button>
        </Link>
            

        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="sushi.png" />
          Sushi
        </button>
        </Link>

        <Link href="./carnes">
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-slate-800 duration-150 font-bold text-base md:text-xl bg-slate-200 rounded-lg border border-red-600  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="verduras.png" />
          Verduras
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
}
