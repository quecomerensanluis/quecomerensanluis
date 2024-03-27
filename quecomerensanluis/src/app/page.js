import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">



      <nav class="flex flex-row items-stretch justify-center bg-gray-800 p-4 mb-8">

    
        <div class="text-white font-bold mx-6"> 
          <a href="/">  
            Qué Comer en San Luis
          </a> 
          </div>



        </nav>



        <section class="flex items-center justify-center flex-wrap gap-7  mb-12 ">


        <button  class="flex items-center gap-2 px-7 py-4 text-white duration-150 bg-red-800 rounded-lg border border-red-200  hover:bg-indigo-500 active:bg-indigo-700">
          <img width="70" height="70" src="next.svg" />
          Carnes y Lomos
        </button>

            
            
        </section>








      </div>
    </main>
  );
}
