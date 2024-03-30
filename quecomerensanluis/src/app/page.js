import Image from "next/image";
import Link from 'next/link';




export default function Home() {
  return (
    <main className="bg-indigo-600 flex flex-col min-h-screen">




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



        <Link href="./carnes">
  <button className="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200 hover:bg-indigo-500 active:bg-indigo-700">
    <img width="45" height="45" src="carnes_lomos.png" alt="Carnes y Lomos" />
    Carnes <br /> y Lomos
  </button>
</Link>



        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="carnes_lomos.png" />
          Carnes  <br/>  y Lomos
        </button>

            


        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="hamburguesas.png" />
          Hamburguesas
        </button>



        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="helado.png" />
          Helado
        </button>








        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="empanadas.png" />
          Empanadas
        </button>

            


        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="pizzas.png" />
          Pizzas
        </button>



        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="pastas.png" />
          Pastas
        </button> 






        
        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="panaderia.png" />
          Panaderìa
        </button>

            


        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="sushi.png" />
          Sushi
        </button>



        <button  class="flex flex-col items-center gap-2 px-2 py-2 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="45" height="45" src="verduras.png" />
          Verduras
        </button>
        
            
        </section>





        <div class="sticky top-[100vh] bg-blue-500">

<footer class="  w-full text-gray-700  body-font">
  <div class="flex justify-center ">

  <div class="text-slate-100 px-7 font-bold py-4">
             Acerca de este sitio.        
  </div>


  <div class="text-slate-100 px-7 font-bold py-4">
             ¿Querés agregar tu local?        
  </div>

  <div class="text-slate-100 px-7 font-bold py-4">
             2024 - Todos los derechos reservados.        
  </div>

    
    </div>

  
  </footer >
</div>







    </main>
  );
}
